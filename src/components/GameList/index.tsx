import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { GameInfoProps, GameProps } from '../../pages/HomePage';

type GameListProps = {
  games: GameProps[];
  gameInfo: GameInfoProps | undefined;
  setGamePage: Dispatch<SetStateAction<number>>;
}

const GameList = ({ games, gameInfo, setGamePage }: GameListProps) => {
  const handlePreviousPage = useCallback(
    () => {
      const getNextPage = Number(gameInfo?.next?.split('page=')[1]);

      if (gameInfo?.prev) {
        setGamePage(getNextPage - 2);
      }
    },
    [gameInfo, setGamePage],
  );

  const handleNextPage = useCallback(
    () => {
      const getNextPage = Number(gameInfo?.next?.split('page=')[1]);

      if (gameInfo?.next) {
        setGamePage(getNextPage);
      }
    },
    [gameInfo?.next, setGamePage],
  );

  return (
    <div className="mt-20 mb-10">
      <div className="block sm:flex items-center justify-between mb-5">
        <h2 className="font-bold text-2xl mb-7">All Games</h2>

        <div className="flex items-center justify-center sm:justify-unset mb-3">
          {gameInfo?.prev && (
            <button 
              type="button" 
              className="flex items-center mr-6 bg-gray-800 rounded p-3"
              onClick={handlePreviousPage}
            >
              <FaChevronLeft />
              <p className="ml-3">Previous Page</p>
            </button>
          )}

          {gameInfo?.next && (
            <button 
              type="button" 
              className="flex items-center bg-gray-800 rounded p-3"
              onClick={handleNextPage}
            >
              <p className="mr-3">Next Page</p>
              <FaChevronRight />
            </button>
          )}

        </div>
      </div>

      <div className="md:grid md:grid-cols-3 lg:grid-cols-4 sl gap-5">
        {games.map((game) => (
          <Link to={`/game/${game.id}`} key={game.id} className="block rounded relative overflow-hidden my-10 md:my-0">
            <img
              src={game.background_image}
              alt={game.name}
              className="h-full w-full rounded"
            />

            <div className="absolute bottom-0 left-0 w-full h-16 backdrop-filter backdrop-blur-sm rounded-none" />

            <div className="absolute bottom-0 left-0 w-full h-16 bg-gray-900 bg-opacity-70 flex items-center">
              <p className="ml-3 font-bold drop-shadow-2xl">
                {game.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
};

export default GameList;

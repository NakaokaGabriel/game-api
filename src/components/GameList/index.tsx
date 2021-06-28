import React from 'react';
import { Link } from 'react-router-dom';

import { GameProps } from '../../pages/HomePage';

type GameListProps = {
  games: GameProps[]
}

export default function GameList({ games }: GameListProps) {
  return (
    <div className="mt-20">
      <h2 className="font-bold text-2xl mb-7">All Games</h2>

      <div className="md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sl gap-5">
        {games.map((game) => (
          <Link to="/game" key={game.id} className="block rounded relative overflow-hidden my-10 md:my-0">
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

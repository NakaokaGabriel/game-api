import React, { useCallback, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { api } from '../../services/api';

import { Genres, ParentPlataforms } from '../../types/Games';

type GameProps = {
  id: number;
  name: string;
  genres: Genres[];
  metacritic: number;
  dominant_color: string;
  background_image: string;
  parent_platforms: ParentPlataforms[];
}

type GameInfoProps = {
  prev: string | undefined;
  next: string | undefined;
}

const HomePage = () => {
  const [games, setGames] = useState<GameProps[]>([]);
  const [gameInfo, setGameInfo] = useState<GameInfoProps>();
  const [gamePage, setGamePage] = useState(2);

  useEffect(() => {
    async function loadGames() {
      const response = await api.get('/games', {
        params: {
          page: gamePage
        }
      });

      setGames(response.data.results);
      setGameInfo({
        prev: response.data.previous,
        next: response.data.next
      });
    }

    loadGames();
  }, [gamePage]);

  const handlePreviousPage = useCallback(
    () => {
      const getNextPage = Number(gameInfo?.next?.split('page=')[1]);

      console.log(getNextPage);

      if (gameInfo?.prev) {
        setGamePage(getNextPage - 2);
      }
    },
    [gameInfo],
  );

  const handleNextPage = useCallback(
    () => {
      const getNextPage = Number(gameInfo?.next?.split('page=')[1]);

      if (gameInfo?.next) {
        setGamePage(getNextPage);
      }
    },
    [gameInfo?.next],
  );

  return (
    <div className="container mx-auto">
      <div className="my-6 md:flex justify-between align-center">
        <div>
          <h1 className="font-bold text-3xl">API Games</h1>
          <p className="mt-2">Searching your favorite game</p>
        </div>

        <label htmlFor="search" className="block w-full md:w-4/12 mt-6 relative">
          <input 
            className="block w-full"
            type="text"
            placeholder="text here" 
            id="search" 
            name="search" 
          />
          <div className="absolute top-0 left-0">
            <FaSearch color="#000" />
          </div>
        </label>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-20">
        {games.map((game) => (
          <div key={game.id}>
            {game.name}
          </div>
        ))}
      </div>
      {
        gameInfo?.prev && <button type="button" onClick={handlePreviousPage}>Previous Page</button>
      }
      {
        gameInfo?.next && <button type="button" onClick={handleNextPage}>Next Page</button>
      }
    </div>
  );
}

export default HomePage;

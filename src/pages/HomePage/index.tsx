import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { api } from '../../services/api';

const HomePage = () => {
  const [games, setGames] = useState([]);
  const [gameInfo, setGameInfo] = useState<any>({});

  useEffect(() => {
    api.get(`/games`, {
      params: {
        page: 1
      }
    }).then((response) => {
      setGames(response.data.results);

      setGameInfo({
        prev: response.data.previous,
        next: response.data.next
      });
    })
  }, []);

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
        {games.map((game: any) => (
          <div key={game.id}>
            {game.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

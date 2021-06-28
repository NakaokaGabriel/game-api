import React, { useState, useEffect } from 'react'
import { FaChevronLeft } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';

import Navigation from '../../components/Navigation';

import { api } from '../../services/api';
import { Developers, Genres, Plataforms } from '../../types/Games';

type ParamsGameProps = {
  id: string;
}

type GameDataProps = {
  name: string;
  background_image: string;
  genres: Genres[];
  plataforms: Plataforms[];
  developers: Developers[];
}

const Game = () => {
  const { id } = useParams<ParamsGameProps>();

  const [gameData, setGameData] = useState<GameDataProps>();

  useEffect(() => {
    api.get(`/games/${id}`)
      .then((response) => {
        console.log(response.data)
        setGameData(response.data)
      });
  }, [id]);

  return (
    <div className="container mx-auto px-2">
      <Navigation />

      <div className="mt-20">
        <Link to="/" className="flex items-center">
          <div className="bg-gray-700 p-2 rounded-full flex items-center justify-center">
            <FaChevronLeft color="#fff" />
          </div>
          <p className="ml-3">Back to all games</p>
        </Link>
      </div>

      <div className="block rounded relative overflow-hidden mt-3 h-96">
        <img
          src={gameData?.background_image}
          alt={gameData?.name}
        />

        <div className="absolute bottom-0 left-0 w-full h-16 backdrop-filter backdrop-blur-sm rounded-none" />

        <div className="absolute bottom-0 left-0 w-full h-16 bg-gray-900 bg-opacity-70 flex items-center">
          <p className="ml-3 font-bold drop-shadow-2xl">
            {gameData?.name}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Game;

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

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
      <img src={gameData?.background_image} alt={gameData?.name} />
    </div>
  )
}

export default Game;

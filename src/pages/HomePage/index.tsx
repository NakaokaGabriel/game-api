import React, { useEffect, useState } from 'react';

import Navigation from '../../components/Navigation';
import GameList from '../../components/GameList';

import { api } from '../../services/api';
import { Genres, Plataforms } from '../../types/Games';

export type GameProps = {
  id: number;
  name: string;
  genres: Genres[];
  metacritic: number;
  dominant_color: string;
  background_image: string;
  parent_platforms: Plataforms[];
}

export type GameInfoProps = {
  prev: string | undefined;
  next: string | undefined;
}

const HomePage = () => {
  const [games, setGames] = useState<GameProps[]>([]);
  const [gameInfo, setGameInfo] = useState<GameInfoProps>();
  const [gamePage, setGamePage] = useState(1);

  useEffect(() => {
    async function loadGames() {
      const response = await api.get('/games', {
        params: {
          page: gamePage,
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

  return (
    <div className="container mx-auto px-2">
      <Navigation />
      <GameList games={games} gameInfo={gameInfo} setGamePage={setGamePage} />
    </div>
  );
}

export default HomePage;

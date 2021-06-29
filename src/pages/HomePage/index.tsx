import React, { useEffect, useState } from 'react';

import Navigation from '../../components/Navigation';
import GameList from '../../components/GameList';

import { api } from '../../services/api';
import { Genres, Platforms } from '../../types/Games';
import { useLoading } from '../../hooks/useLoading';
import { useSearch } from '../../hooks/useSearch';

export type GameProps = {
  id: number;
  name: string;
  genres: Genres[];
  metacritic: number;
  dominant_color: string;
  background_image: string;
  parent_platforms: Platforms[];
}

export type GameInfoProps = {
  prev: string | undefined;
  next: string | undefined;
}

const HomePage = () => {
  const [games, setGames] = useState<GameProps[]>([]);
  const [gameInfo, setGameInfo] = useState<GameInfoProps>();
  const [gamePage, setGamePage] = useState(1);

  const { loading, setLoading } = useLoading();
  const { search } = useSearch();

  useEffect(() => {
    async function loadGames() {
      setLoading(true);
      try {
        const response = await api.get('/games', {
          params: {
            page: gamePage,
            search
          }
        });
  
        setGames(response.data.results);
        setGameInfo({
          prev: response.data.previous,
          next: response.data.next
        });
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }

    loadGames();
  }, [gamePage, setLoading, search]);

  return (
    <div className="container mx-auto px-2">
      <Navigation />
      <GameList games={games} gameInfo={gameInfo} setGamePage={setGamePage} loading={loading} />
    </div>
  );
}

export default HomePage;

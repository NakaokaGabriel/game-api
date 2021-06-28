import React, { useCallback, useEffect, useState } from 'react';

import Navigation from '../../components/Navigation';
import GameList from '../../components/GameList';

import { api } from '../../services/api';

import { Genres, ParentPlataforms } from '../../types/Games';

export type GameProps = {
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
  const [gamePage, setGamePage] = useState(1);

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
      <Navigation />
      <GameList games={games} />

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

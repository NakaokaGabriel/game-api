import React, { useState, useEffect } from 'react'
import { FaChevronLeft } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';

import Loading from '../../components/Loading';

import { api } from '../../services/api';
import { Developers, Genres, Platforms } from '../../types/Games';
import { useLoading } from '../../hooks/useLoading';

type ParamsGameProps = {
  id: string;
}

type GameDataProps = {
  name: string;
  description_raw: string;
  background_image: string;
  genres: Genres[];
  platforms: Platforms[];
  developers: Developers[];
}

const Game = () => {
  const { id } = useParams<ParamsGameProps>();

  const [gameData, setGameData] = useState<GameDataProps>();
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    async function loadGame() {
      setLoading(true);

      try {
        const response = await api.get(`/games/${id}`);

        setGameData(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }

    loadGame();
  }, [id, setLoading]);

  return (
    <div className="container mx-auto my-6 px-2">
      <div className="mt-3 mb-4 inline-block">
        <Link to="/" className="flex items-center">
          <div className="bg-gray-700 p-2 rounded-full flex items-center justify-center">
            <FaChevronLeft color="#fff" />
          </div>
          <p className="ml-3">Back to all games</p>
        </Link>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={`block rounded relative overflow-hidden mt-3 h-auto md:h-96`}>
            <img
              src={gameData?.background_image}
              alt={gameData?.name}
              className="w-full"
            />

            <div className="absolute bottom-0 left-0 w-full h-16 backdrop-filter backdrop-blur-sm rounded-none" />

            <div className="absolute bottom-0 left-0 w-full h-16 bg-gray-900 bg-opacity-70 flex items-center">
              <p className="ml-3 font-bold drop-shadow-2xl">
                {gameData?.name}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md gap-4 mt-16">
            <div className="order-2 md:order-1 md:w-8/12">
              <h3 className="font-bold text-xl mb-3">Description</h3>
              <p className="text-md">{gameData?.description_raw}</p>
            </div>

            <div className="order-1 md:order-2 md:w-4/12 h-full bg-gray-800 p-6 rounded">
              <div className="mb-5">
                <h3 className="font-bold text-xl mb-3">Platforms</h3>

                <div className="flex flex-wrap gap-4">
                  {gameData?.platforms.map((platform) => (
                    <p key={platform.platform.id}>{platform.platform.name}</p>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <h3 className="font-bold text-xl mb-3">Genres</h3>

                <div className="flex flex-wrap gap-4">
                  {gameData?.genres.map((genre) => (
                    <p key={genre.id}>{genre.name}</p>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <h3 className="font-bold text-xl mb-3">Developers</h3>

                <div className="flex flex-wrap gap-4">
                  {gameData?.developers.map((developer) => (
                    <p key={developer.id}>{developer.name}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div >
  )
}

export default Game;

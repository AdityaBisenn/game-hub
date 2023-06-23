import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = (selectedGenre : Genre | null, selectedPlatform : Platform | null, selectedSortOrder : string ) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const requestConfig= {
    params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
        ordering: selectedSortOrder,
    }
  }

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [selectedGenre, selectedPlatform, selectedSortOrder]);

  return { games, error, loading };
};
export default useGames;

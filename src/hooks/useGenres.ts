import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

    export interface Genre {
        id: number;
        name: string;
        image_background: string;
    }

    interface FetchGenresResponse {
        count: number;
        results: Genre[];
    }

    const useGenres = () => {
        const [genres, setGenres] = useState<Genre[]>([]);
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(false);
      
        useEffect(() => {
          const controller = new AbortController();
      
          setLoading(true);
          apiClient
            .get<FetchGenresResponse>("/genres", { signal: controller.signal })
            .then((res) => {
              setGenres(res.data.results);
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
        }, []);

        return { genres, error, loading };

}

export default useGenres
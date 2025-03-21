import { useEffect, useState } from "react";
import { Movie, Season } from "../types/types";
import instance from "../utils/instance";

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [seasons, setSeasons] = useState<Season[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    try {
      const [moviesResponse, seasonsResponse] = await Promise.all([
        instance.get("/movie/popular"),
        instance.get("/tv/popular"),
      ]);
      setMovies(moviesResponse.data?.results ?? null);
      setSeasons(seasonsResponse.data?.results ?? null);
      setLoading(false);
    } catch {
      setError("Failed to fetch movies and TV shows");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { movies, seasons, loading, error };
};

export default useMovies;

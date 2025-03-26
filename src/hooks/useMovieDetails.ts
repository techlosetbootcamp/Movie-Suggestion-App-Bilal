import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { selectAllMovies, selectIsLoading } from "../store/slices/movieSlice";
import { selectAllSearch } from "../store/slices/searchSlice";
import { Movie } from "../types/types";
import instance from "../utils/instance";
import { useAppSelector } from "../store/store";

export function useMovieDetails(): {
  movieData: Movie | null;
  isLoading: boolean;
} {
  const { movieId } = useParams();
  const movies = useAppSelector(selectAllMovies);
  const searchResults = useAppSelector(selectAllSearch);
  const isLoading = useAppSelector(selectIsLoading);
  const [movieData, setMovieData] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieFromState = [...movies, ...searchResults]?.find(
        (movie) => movie?.id.toString() === movieId
      );

      if (movieFromState) {
        setMovieData(movieFromState);
      } else {
        try {
          const response = await instance.get(
            `/movie/${movieId}?language=en-US`
          );
          setMovieData(response?.data);
        } catch (error) {
          console.error("Error fetching movie details:", error);
          setMovieData(null);
        }
      }
    };

    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId, movies, searchResults]);

  return { movieData, isLoading };
}

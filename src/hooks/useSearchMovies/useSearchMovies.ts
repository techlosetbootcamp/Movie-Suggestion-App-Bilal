import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchMovies, selectAllSearch, selectIsLoading } from "../../redux/slice/searchSlice";
import { Movie } from "../../types/types";
import { useAppDispatch } from "../useAppDispatch/useAppDispatch";
import { useAppSelector } from "../useAppSelector/useAppSelector";

export function useSearchMovies(): {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  searches: Movie[];
  isLoading: boolean;
} {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const searches = useAppSelector(selectAllSearch) || [];
  const isLoading = useAppSelector(selectIsLoading);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const newQuery = searchParams.get("query") || "";
    setQuery(newQuery);
  }, [location.search]);

  useEffect(() => {
    if (query) {
      dispatch(searchMovies(query)).catch((error: Error) => {
        console.error("Error in searchMovies dispatch:", error);
      });
    }
  }, [dispatch, query]);

  return { query, setQuery, searches, isLoading };
}

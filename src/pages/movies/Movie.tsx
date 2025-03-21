import MovieDetail from "../../components/movieDetail/MovieDetail";
import Loader from "../../components/loader/Loader";
import Seasons from "../../components/season/Season";
import useMovies from "../../hooks/useMovie";

export default function Movie() {
  const { loading } = useMovies();

  return (
    <div className="">
      {loading ? (
        <Loader />
      ) : (
        <>
          <MovieDetail />
          <Seasons />
        </>
      )}
    </div>
  );
}

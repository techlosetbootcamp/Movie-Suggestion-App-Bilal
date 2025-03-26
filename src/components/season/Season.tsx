import useMovies from "../../hooks/useMovie";
import SeasonPoster from "../../components/seasonPoster/SeasonPoster";
import Loader from "../loader/Loader";

export default function Seasons() {
  const { seasons, loading, error } = useMovies();

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const imageBaseUrl =
    import.meta.env.VITE_SEASON_BASE_URL;

  return (
    <>
      <div className="container md:my-2 mx-auto py-4 mt-[280px]">
        <div className="grid grid-cols-2 gap-4 mb-[30px] ">
          <div className="flex flex-row gap-4">
            <h1 className="font-bold lg:text-4xl leading-9 text-[26px]">
              Seasons
            </h1>
            {Array.from({ length: 4 }, (_, index) => (
              <span
                key={index}
                className="p-[10px] cursor-pointer hover:bg-lightGray flex flex-row rounded-[10px] lg:pl-[14.5px] lg:pt-[5px] lg:h-[43.27px] lg:w-[43.27px] bg-lightGray text-black text-[20px]"
              >
                {index + 1}
              </span>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          {seasons?.slice(0, 20)?.map((season) => (
            <div key={season.id}>
              <SeasonPoster
                imageUrl={`${imageBaseUrl}/w500${season?.poster_path}`}
                movieId={season?.id}
                rating={season?.vote_average}
                name={season?.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

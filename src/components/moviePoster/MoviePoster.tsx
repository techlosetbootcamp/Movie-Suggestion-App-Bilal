import { useNavigate } from "react-router-dom";
import { MoviePosterProps } from "../../types/types";
import { Star } from "lucide-react";
import { IMAGE_BASE_URL } from "../../constants/constant";

const MoviePoster: React.FC<MoviePosterProps> = ({
  imageUrl,
  movieId,
  rating,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div
      className="relative rounded-md cursor-pointer overflow-hidden transition-transform transform-gpu hover:scale-105"
      onClick={handleClick}
    >
      <img
        src={`${IMAGE_BASE_URL}/${imageUrl}`}
        alt="Movie Poster"
        className="rounded-[20px] shrink-0 w-[200px] h-[263px]"
      />
      <div className="absolute top-0 left-0 flex items-center rounded-[20px] space-x-1 p-2 bg-opacity-75 transition-opacity duration-300">
        <span className="flex justify-center items-center text-white font-FONTSPRING-DEMO-Caros-Bold text-15px font-bold leading-9 letter-spacing-0">
          <Star className="text-yellow-400" /> {Math.round(rating)}
        </span>
      </div>
    </div>
  );
};

export default MoviePoster;

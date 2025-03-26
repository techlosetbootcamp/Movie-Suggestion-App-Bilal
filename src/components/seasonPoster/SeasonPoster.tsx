import { SeasonPosterProps } from "../../types/types";
import { Star } from "lucide-react";

const SeasonPoster: React.FC<SeasonPosterProps> = ({
  imageUrl,
  name,
  rating,
}) => {
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
  
  return (
    <>
      <div className="relative rounded-tl-lg rounded-tr-lg cursor-pointer overflow-hidden transition-transform transform-gpu duration-0 mb-5 hover:scale-105">
        <img
          src={`${imageBaseUrl}/${imageUrl}`}
          alt="Season Poster"
          className="rounded-[20px] shrink-0 w-[305px] h-[202px] object-cover"
        />

        <div className="absolute top-2 left-2 rounded-[20px] flex items-center space-x-1 p-2 bg-opacity-75 transition-opacity duration-300">
          <span className="flex justify-center items-center text-white font-FONTSPRING-DEMO-Caros-Bold text-15px font-bold leading-9 letter-spacing-0 text-left ">
            <Star className="text-yellow-400" /> {Math?.round(rating)}
          </span>
        </div>
        <h3 className="font-bold text-4l leading-9 mt-2">{name}</h3>
      </div>
    </>
  );
};

export default SeasonPoster;

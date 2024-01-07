import { IMG_POSTER } from "../utils/constants";

const MovieCard = ({ title, posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMG_POSTER + posterPath} alt={title} />
    </div>
  );
};

export default MovieCard;

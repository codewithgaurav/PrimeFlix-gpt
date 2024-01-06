import { TRAILER_YOUTUBE } from "../utils/constants";
import { useSelector } from "react-redux";
import useMovieVideo from "./Hooks/useMovieVideo";

const VideoBackground = ({ movie_id }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieVideo(movie_id);
  return (
    <div>
      <iframe
        className="aspect-video w-screen "
        src={
          TRAILER_YOUTUBE + trailerVideo?.key + "?autoplay=1&mute=1&controls=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

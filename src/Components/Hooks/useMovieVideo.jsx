import { useDispatch, useSelector } from "react-redux";
import { VIDEO_API, options } from "../../utils/constants";
import { addTrailerVideo } from "../../utils/moviesSlice";
import { useEffect } from "react";

const useMovieVideo = (movie_id) => {
  const dispatch = useDispatch();

  const fetchMovieTrailer = async () => {
    const fetchData = await fetch(`${VIDEO_API}${movie_id}/videos`, options);
    const response = await fetchData.json();
    const featuredVideo = response.results.filter(
      (video) => video.type === "Trailer",
    );
    const movieTrailer = featuredVideo[0];
    console.log(movieTrailer);
    dispatch(addTrailerVideo(movieTrailer));
  };

  useEffect(() => {
    fetchMovieTrailer();
  }, []);
};

export default useMovieVideo;

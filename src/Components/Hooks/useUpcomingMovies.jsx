import { useDispatch } from "react-redux";
import { TMDB_UPCOMING_API, options } from "../../utils/constants";
import { addUpcomingMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const fetchMovie = async () => {
    const movieData = await fetch(TMDB_UPCOMING_API, options);
    const response = await movieData.json();

    dispatch(addUpcomingMovies(response.results));
  };

  useEffect(() => {
    fetchMovie();
  }, []);
};

export default useUpcomingMovies;

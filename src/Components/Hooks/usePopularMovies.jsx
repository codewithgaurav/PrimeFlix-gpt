import { useDispatch } from "react-redux";
import { TMDB_POPULAR_API, options } from "../../utils/constants";
import { addPopularMoives } from "../../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchPopularMovies = async () => {
    const fetchMovie = await fetch(TMDB_POPULAR_API, options);
    const response = await fetchMovie.json();

    dispatch(addPopularMoives(response.results));
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);
};

export default usePopularMovies;

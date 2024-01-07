import { useDispatch } from "react-redux";
import { TMDB_TOPRATED_API, options } from "../../utils/constants";
import { addTopRatedMoives } from "../../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const fetchTopRated = async () => {
    const fetchMovieData = await fetch(TMDB_TOPRATED_API, options);
    const response = await fetchMovieData.json();

    dispatch(addTopRatedMoives(response.results));
  };

  useEffect(() => {
    fetchTopRated();
  }, []);
};

export default useTopRatedMovies;

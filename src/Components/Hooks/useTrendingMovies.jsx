import { useDispatch } from "react-redux";
import { TMDB_TRENDINGMOVIES_API, options } from "../../utils/constants";
import { addTrendingMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const fetchTrendingMovies = async () => {
    const movieData = await fetch(TMDB_TRENDINGMOVIES_API, options);
    const response = await movieData.json();

    dispatch(addTrendingMovies(response.results));
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);
};

export default useTrendingMovies;

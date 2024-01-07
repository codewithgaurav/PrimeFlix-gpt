import { useDispatch } from "react-redux";
import { addTrendingTvShows } from "../../utils/moviesSlice";
import { TMDB_TRENDINGTVSHOWS_API, options } from "../../utils/constants";
import { useEffect } from "react";

const useTrendingTvShows = () => {
  const dispatch = useDispatch();

  const fetchMovieData = async () => {
    const movieData = await fetch(TMDB_TRENDINGTVSHOWS_API, options);
    const response = await movieData.json();
    console.log(response.results);
    dispatch(addTrendingTvShows(response.results));
  };

  useEffect(() => {
    fetchMovieData();
  }, []);
};

export default useTrendingTvShows;

import { useDispatch } from "react-redux";
import { TMDB_TVSHOWSAIRING_API, options } from "../../utils/constants";
import { addTvShowsAiring } from "../../utils/moviesSlice";
import { useEffect } from "react";

const useTvShowsAiring = () => {
  const dispatch = useDispatch();

  const fetchMovieData = async () => {
    const fetchMovie = await fetch(TMDB_TVSHOWSAIRING_API, options);
    const response = await fetchMovie.json();
    console.log(response.results);

    dispatch(addTvShowsAiring(response.results));
  };

  useEffect(() => {
    fetchMovieData();
  }, []);
};

export default useTvShowsAiring;

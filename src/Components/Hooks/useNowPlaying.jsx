import { useDispatch } from "react-redux";
import { TMDB_API, options } from "../../utils/constants";
import { addNowPlayingMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const fetchData = await fetch(TMDB_API, options);
    const response = await fetchData.json();
    // console.log(response.results);

    dispatch(addNowPlayingMovies(response.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;

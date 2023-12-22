import { useEffect } from "react";
import { addNowPlayingMovies } from "../../utils/movieSlice";
import { options } from "../../utils/constants";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMoviesData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options,
    );
    const result = await data.json();
    console.log(result.results);
    dispatch(addNowPlayingMovies(result.results));
  };

  useEffect(() => {
    getNowPlayingMoviesData();
  }, []);
};

export default useNowPlayingMovies;

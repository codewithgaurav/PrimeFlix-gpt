import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div>
      <div className="-mt-[8%] bg-[#141414] ">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Trending Movies"} movies={movies?.trendingMovies} />
        <MovieList title={"Top-Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
        <MovieList
          title={"Tv Shows Airing Today"}
          movies={movies?.tvShowsAiring}
        />
        <MovieList
          title={"Trending Tv Shows"}
          movies={movies?.trendingTvShows}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;

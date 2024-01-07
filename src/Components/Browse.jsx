import Header from "./Header";
import useNowPlayingMovies from "./Hooks/useNowPlaying";
import usePopularMovies from "./Hooks/usePopularMovies";
import useTopRatedMovies from "./Hooks/useTopRatedMoviesl";
import useTrendingMovies from "./Hooks/useTrendingMovies";
import useTrendingTvShows from "./Hooks/useTrendingTvShows";
import useTvShowsAiring from "./Hooks/useTvShowsAiring";
import useUpcomingMovies from "./Hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTvShowsAiring();
  useTrendingMovies();
  useTrendingTvShows();

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <MainContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;

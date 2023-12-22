import Header from "./Header";
import useNowPlayingMovies from "./Hooks/useNowPlaying";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className=" text-center ">
      <Header />
    </div>
  );
};

export default Browse;

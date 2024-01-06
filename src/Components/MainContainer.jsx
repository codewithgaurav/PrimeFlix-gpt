import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return <div>Loading...</div>;
  const randomMovie = Math.floor(Math.random() * movies.length);

  const featuredMovie = movies[randomMovie];
  console.log(featuredMovie);
  const { title, overview, id } = featuredMovie;

  return (
    <div className=" overflow-hidden ">
      <VideoTitle title={title} overview={overview} />

      <VideoBackground movie_id={id} />
    </div>
  );
};

export default MainContainer;

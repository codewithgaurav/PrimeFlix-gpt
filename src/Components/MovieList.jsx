import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  // console.log(movies.title);
  return (
    <div className=" p-6 ">
      <h1 className="py-2 text-2xl font-bold text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

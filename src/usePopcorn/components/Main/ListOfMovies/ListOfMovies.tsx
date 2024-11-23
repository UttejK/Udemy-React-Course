import { TMovie } from "../../../utils/types";
import Movie from "./Movie";

export default function ListOfMovies({ movies }: { movies: TMovie[] }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

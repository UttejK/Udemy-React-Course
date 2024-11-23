import { TMovie } from "../../utils/types";
import ListOfMoviesPanel from "./ListOfMovies/ListOfMoviesPanel";
import MoviesWatchedPanel from "./MoviesWatched/MoviesWatchedPanel";

export default function Main({ movies }: { movies: TMovie[] }) {
  return (
    <main className="main">
      <ListOfMoviesPanel movies={movies} />
      <MoviesWatchedPanel />
    </main>
  );
}

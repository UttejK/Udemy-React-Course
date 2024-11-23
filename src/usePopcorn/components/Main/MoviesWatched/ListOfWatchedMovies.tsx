import { TWatchedMovie } from "../../../utils/types";
import WatchedMovie from "./WatchedMovie";

export default function ListOfWatchedMovies({
  watched,
}: {
  watched: TWatchedMovie[];
}) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

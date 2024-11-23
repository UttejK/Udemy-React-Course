import { TMovie } from "../../utils/types";

export default function NumberOfResults({ movies }: { movies: TMovie[] }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

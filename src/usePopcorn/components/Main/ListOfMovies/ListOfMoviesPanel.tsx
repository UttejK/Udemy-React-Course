import { useState } from "react";
import ListOfMovies from "./ListOfMovies";
import { TMovie } from "../../../utils/types";

export default function ListOfMoviesPanel({ movies }: { movies: TMovie[] }) {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <ListOfMovies movies={movies} />}
    </div>
  );
}

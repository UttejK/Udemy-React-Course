import { useState } from "react";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import "./usePopcorn.css";
import { TMovie } from "./utils/types";
import { tempMovieData } from "./utils/constants";

export default function Project() {
  const [movies, setMovies] = useState<TMovie[]>(tempMovieData);

  return (
    <>
      <Navbar movies={movies} />
      <Main movies={movies} />
    </>
  );
}

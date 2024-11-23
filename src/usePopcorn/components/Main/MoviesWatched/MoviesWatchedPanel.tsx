import { useState } from "react";
import { tempWatchedData } from "../../../utils/constants";
import { TWatchedMovie } from "../../../utils/types";
import WatchedSummary from "./WatchedSummary";
import ListOfWatchedMovies from "./ListOfWatchedMovies";

export default function MoviesWatchedPanel() {
  const [watched, setWatched] = useState<TWatchedMovie[]>(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />
          <ListOfWatchedMovies watched={watched} />
        </>
      )}
    </div>
  );
}

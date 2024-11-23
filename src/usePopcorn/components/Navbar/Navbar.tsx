import { TMovie } from "../../utils/types";
import Logo from "./Logo";
import NumberOfResults from "./NumberOfResults";
import Search from "./Search";

export default function Navbar({ movies }: { movies: TMovie[] }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumberOfResults movies={movies} />
    </nav>
  );
}

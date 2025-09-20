import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 p-4 bg-gray-800 sticky top-0 z-50 text-white">
      <div className="flex gap-4">
        <Link to="/" className="text-xl font-bold">
          Home
        </Link>
        <Link to="/favorites" className="text-lg">
          Favorites
        </Link>
      </div>
      <SearchBar />
    </nav>
  );
};

export default Navbar;

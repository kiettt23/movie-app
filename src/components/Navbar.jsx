import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white items-center">
      <div>
        <Link to="/" className="text-xl font-bold">
          Home
        </Link>
        <Link to="/favorites" className="ml-4">
          Favorites
        </Link>
      </div>
      <SearchBar />
    </nav>
  );
};

export default Navbar;

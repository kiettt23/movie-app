import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <div>
        <Link to="/" className="text-xl">
          Home
        </Link>
      </div>
      <div>
        <Link to="/favorites" className="ml-4">
          Favorites
        </Link>
        <Link to="/search" className="ml-4">
          Search
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

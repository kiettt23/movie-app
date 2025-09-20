import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import MovieList from "../components/MovieList";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Favorites</h1>
      {favorites.length > 0 ? (
        <MovieList movies={favorites} />
      ) : (
        <p>No favorite movies yet.</p>
      )}
    </div>
  );
};

export default Favorites;

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const MovieCard = ({ id, title, description, imageUrl }) => {
  const navigate = useNavigate();
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);

  const handleToggleFavorite = (e) => {
    e.stopPropagation(); // tránh click card => navigate
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite({ id, title, description, imageUrl });
    }
  };

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-pointer hover:shadow-xl transition"
      onClick={() => navigate(`/movie/${id}`)}
    >
      <img
        className="w-full h-56 object-cover"
        src={imageUrl}
        alt={title}
        onError={(e) =>
          (e.target.src = "https://placehold.co/500x750?text=No+Image")
        }
      />
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700 text-base line-clamp-3">{description}</p>
        <button
          onClick={handleToggleFavorite}
          className={`mt-2 px-3 py-1 rounded ${
            isFavorite(id) ? "bg-red-500 text-white" : "bg-gray-200 text-black"
          }`}
        >
          {isFavorite(id) ? "★ Remove Favorite" : "☆ Add Favorite"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;

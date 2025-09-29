import { useNavigate } from "react-router-dom";
import { useContext, useMemo } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const getButtonClassName = (isFavorite) => {
  const baseClassName = "mt-2 px-3 py-1 rounded transition-colors duration-200";

  return `${baseClassName}${
    isFavorite
      ? "bg-red-500 text-white hover:bg-red-600"
      : "bg-gray-200 text-black hover:bg-gray-300"
  }`;
};

const MovieCard = ({ id, title, description, imageUrl }) => {
  const navigate = useNavigate();
  const {
    addFavorite,
    removeFavorite,
    isFavorite: isFavoriteFn,
  } = useContext(FavoritesContext);

  const isFavorite = useMemo(() => isFavoriteFn(id), [id, isFavoriteFn]);

  const handleToggleFavorite = (e) => {
    e.stopPropagation(); // tránh click card => navigate
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite({ id, title, description, imageUrl });
    }
  };

  return (
    <div
      className="rounded overflow-hidden shadow-md bg-white cursor-pointer 
                 hover:shadow-xl hover:scale-105 transition-transform duration-300 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 
                 h-full flex flex-col"
      onClick={() => navigate(`/movie/${id}`)}
      tabIndex={0} // cho phép focus bằng bàn phím
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
        <h2 className="text-xl font-bold line-clamp-1">{title}</h2>
        <p className="text-gray-700 text-base line-clamp-3">{description}</p>
        <button
          onClick={handleToggleFavorite}
          className={getButtonClassName(isFavorite)}
        >
          {isFavorite ? "★ Remove Favorite" : "☆ Add Favorite"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;

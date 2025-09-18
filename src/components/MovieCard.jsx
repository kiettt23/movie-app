const MovieCard = ({ title, description, imageUrl }) => {
  // Kiểm tra URL hình ảnh
  console.log("Image URL:", imageUrl);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
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
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;

const MovieCard = ({ title, description, imageUrl }) => {
  const imagePath = imageUrl
    ? `https://image.tmdb.org/t/p/w500${imageUrl}`
    : "/path/to/placeholder.jpg";

  // Kiểm tra URL hình ảnh
  console.log("Image URL:", imagePath);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-56 object-cover" src={imagePath} alt={title} />
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;

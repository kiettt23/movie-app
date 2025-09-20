import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetail } from "../services/tmdb";

const IMG_BASE = "https://image.tmdb.org/t/p/";

export default function MovieDetail() {
  const { id } = useParams(); // lấy id từ URL /movie/:id
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null); // lưu dữ liệu chi tiết
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDetail() {
      try {
        setLoading(true);
        const res = await getMovieDetail(id);
        
        setMovie(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load movie detail");
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchDetail();
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;
  if (!movie) return null;

  const posterUrl = movie.poster_path
    ? `${IMG_BASE}w500${movie.poster_path}`
    : movie.backdrop_path
    ? `${IMG_BASE}w780${movie.backdrop_path}`
    : null;

  return (
    <section className="container mx-auto px-4 py-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={movie.title}
            className="w-full h-64 sm:h-96 rounded-lg object-cover"
          />
        ) : (
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded-lg">
            No Image
          </div>
        )}

        <div className="md:col-span-2 flex flex-col gap-3">
          <h1 className="text-3xl sm:text-4xl font-semibold">{movie.title}</h1>
          <div className="text-sm sm:text-base text-gray-500">
            {movie.genres?.map((g) => g.name).join(" • ") || "No genre"}
          </div>
          <div className="text-sm sm:text-base text-gray-500">
            Release: {movie.release_date || "N/A"}
          </div>
          <div className="text-sm sm:text-base text-yellow-600">
            ★ {movie.vote_average ? movie.vote_average.toFixed(1) : "—"}/10
          </div>
          <p className="mt-2 text-base sm:text-lg leading-relaxed">
            {movie.overview}
          </p>
        </div>
      </div>
    </section>
  );
}

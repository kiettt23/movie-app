import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MovieList from "../components/MovieList";
import { searchMovies } from "../services/tmdb";

const SearchResult = () => {
  const [movies, setMovies] = useState([]);
  const query = new URLSearchParams(useLocation().search).get("q"); // Lấy query từ URL

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query) {
        const response = await searchMovies(query);
        const movieData = response.data.results.map((movie) => ({
          title: movie.title,
          description: movie.overview,
          imageUrl: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://placehold.co/500x750?text=No+Image",
        }));

        // Kiểm tra dữ liệu tìm kiếm
        console.log("Search API Response:", response.data);

        setMovies(movieData);
      }
    };

    fetchSearchResults();
  }, [query]); // Chạy lại khi query thay đổi

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Search Results for "{query}"</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default SearchResult;

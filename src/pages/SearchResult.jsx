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

        // Kiểm tra dữ liệu tìm kiếm
        console.log("Search API Response:", response.data.results);

        setMovies(response.data.results);
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

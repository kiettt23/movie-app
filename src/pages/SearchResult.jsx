import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";
import { searchMovies } from "../services/tmdb";

const SearchResult = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const query = new URLSearchParams(useLocation().search).get("query");

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query) {
        const response = await searchMovies(query, page);
        console.log("Search API Response", response.data);
        const movieData = response.data.results.map((movie) => ({
          id: movie.id,
          title: movie.title,
          description: movie.overview,
          imageUrl: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://placehold.co/500x750?text=No+Image",
        }));

        setMovies(movieData);
        setTotalPages(response.data.total_pages);
      }
    };
    fetchSearchResults();
  }, [query, page]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
      <MovieList movies={movies} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default SearchResult;

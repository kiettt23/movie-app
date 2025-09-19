import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import GenreFilter from "../components/GenreFilter";
import { getPopularMovies, discoverMovies } from "../services/tmdb";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [genreId, setGenreId] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = genreId
          ? await discoverMovies(genreId, page)
          : await getPopularMovies(page);
        console.log("API Response", response.data);
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
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };
    fetchMovies();
  }, [page, genreId]);

  return (
    <div className="p-4">
      <GenreFilter
        onChange={(id) => {
          setGenreId(id || null);
          setPage(1);
        }}
      />
      <h1 className="text-2xl font-bold mt-4">
        {genreId ? "Filtered Movies" : "Popular Movies"}
      </h1>
      <MovieList movies={movies} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default Home;

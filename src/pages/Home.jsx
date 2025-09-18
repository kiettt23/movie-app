import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import { getPopularMovies } from "../services/tmdb";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getPopularMovies(page);
      console.log("API Response:", response.data);

      const movieData = response.data.results.map((movie) => ({
        title: movie.title,
        description: movie.overview,
        imageUrl: movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "https://placehold.co/500x750?text=No+Image",
      }));

      setMovies(movieData);
      setTotalPages(response.data.total_pages);
    };

    fetchMovies();
  }, [page]);

  return (
    <div className="p-4">
      <SearchBar />
      <h1 className="text-2xl font-bold">Popular Movies</h1>
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

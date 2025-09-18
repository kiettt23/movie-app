import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import { getPopularMovies } from "../services/tmdb";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await getPopularMovies();
      setMovies(response.data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Popular Movies</h1>
      <SearchBar />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;

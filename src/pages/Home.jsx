import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const Home = () => {
  const movies = [
    { title: "Movie 1", description: "Description 1", imageUrl: "url1" },
    { title: "Movie 2", description: "Description 2", imageUrl: "url2" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Hello Home</h1>
      <SearchBar />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;

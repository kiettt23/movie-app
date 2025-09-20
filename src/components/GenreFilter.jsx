import { useEffect, useState } from "react";
import { getGenres } from "../services/tmdb";

const GenreFilter = ({ onChange }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await getGenres();
        setGenres(res.data.genres);
      } catch (err) {
        console.error("Failed to load genres:", err);
      }
    };
    fetchGenres();
  }, []);

  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className="border rounded px-2 py-1 w-full sm:w-auto"
    >
      <option value="">All Genres</option>
      {genres.map((g) => (
        <option key={g.id} value={g.id}>
          {g.name}
        </option>
      ))}
    </select>
  );
};

export default GenreFilter;

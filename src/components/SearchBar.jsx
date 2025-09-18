import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 border rounded-l"
        placeholder="Search for a movie..."
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;

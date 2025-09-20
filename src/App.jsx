import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MovieDetail from "./pages/MovieDetail";
import SearchResult from "./pages/SearchResult";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="search" element={<SearchResult />} />
        <Route
          path="*"
          element={<h1 className="p-6 text-2xl">404 - Page Not Found</h1>}
        />
      </Route>
    </Routes>
  );
};

export default App;

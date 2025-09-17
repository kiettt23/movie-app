// src/App.j
import { useEffect } from "react";
import { getPopularMovies } from "./services/tmdb";

export default function App() {
  useEffect(() => {
    // ➊ Gọi API khi mount
    getPopularMovies(2)
      .then((res) => {
        // ➋ In kết quả để confirm data shape
        console.log("POPULAR:", res.data); // xem res.data.results
      })
      .catch((err) => {
        // ➌ In lỗi dễ hiểu (status + message)
        console.error("TMDB error:", err.response?.status, err.message);
      });
  }, []);

  // ➍ Thêm 1 heading nhỏ để thử Tailwind
  return <h1 className="text-2xl font-bold p-4">Movie App • M1 ready</h1>;
}
// Giải thích class Tailwind: text-2xl (font-size lớn), font-bold (đậm), p-4 (padding)

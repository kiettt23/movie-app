import axios from "axios";

// ➊ Tạo axios instance với cấu hình chung
const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3", // ➋ API v3 base
  headers: {
    // ➌ Bearer token đọc từ biến môi trường (Vite)
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_TOKEN}`,
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    language: "en-US", // ➍ mặc định ngôn ngữ
  },
});

// ➎ Hàm tiện ích: lấy danh sách "popular" (có phân trang)
export const getPopularMovies = (page = 1) =>
  tmdb.get("/movie/popular", { params: { page } }); // ➏ endpoint chính thức

export default tmdb;

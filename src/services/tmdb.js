import axios from "axios";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_TOKEN}`,
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    language: "en-US", // mặc định ngôn ngữ
  },
});

// Lấy danh sách phim phổ biến
export const getPopularMovies = (page = 1) =>
  tmdb.get("/movie/popular", { params: { page } });

// Tìm kiếm phim
export const searchMovies = (query, page = 1) =>
  tmdb.get("/search/movie", { params: { query, page } });

// Lấy chi tiết 1 phim theo id
export const getMovieDetail = (id) => tmdb.get(`/movie/${id}`);

// Lấy danh sách thể loại phim
export const getGenres = () => tmdb.get("/genre/movie/list");

// Lọc phim theo genre
export const discoverMovies = (genreId, page = 1) =>
  tmdb.get("/discover/movie", { params: { with_genres: genreId, page } });

export default tmdb;

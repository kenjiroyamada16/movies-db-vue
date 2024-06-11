import ApiService from "../api.service";

const MoviesResource = {
  getPopularMovies: () => ApiService.get('/3/movie/popular'),
  getRecentMovies: () => ApiService.get('/3/movie/now_playing'),
  getTopRatedMovies: () => ApiService.get('/3/movie/top_rated'),
  getUpcoming: () => ApiService.get('/3/movie/upcoming'),
}

export default MoviesResource;
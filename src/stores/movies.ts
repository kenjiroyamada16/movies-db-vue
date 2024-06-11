import { IMovie } from "@/interfaces/api/resources/movie";
import { defineStore } from "pinia";
import MoviesResource from "@/api/resources/movies";
import { useLoadingStore } from "./loading";

interface IMoviesState {
  error?: string | null,
  popularMovies: IMovie[],
  recentMovies: IMovie[],
  upcomingMovies: IMovie[],
  topRatedMovies: IMovie[],
}

export const useMoviesStore = defineStore({
  id: "movies_store",

  state: (): IMoviesState => ({
    error: 'null',
    popularMovies: [],
    recentMovies: [],
    upcomingMovies: [],
    topRatedMovies: [],
  }),

  getters: {
    getPopularMovies: state => state.popularMovies,
    getRecentMovies: state => state.recentMovies,
    getUpcomingMovies: state => state.upcomingMovies,
    getTopRatedMovies: state => state.topRatedMovies,
  },

  actions: {
    fetchPopularMovies() {
      this.$patch({
        error: null,
      });
      useLoadingStore().setLoading(true);

      MoviesResource.getPopularMovies()
        .then(response => {
          this.$patch({
            popularMovies: response['results'],
          });
        })
        .catch(error => {
          this.$patch({
            error: error,
          });
        })
        .finally(() => {
          useLoadingStore().setLoading(false);
        })
    }
  }
})
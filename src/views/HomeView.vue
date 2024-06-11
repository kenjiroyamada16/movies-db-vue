<template>
  <div class="home">
    <!--verificar por que o loading nao funciona-->
    <v-progress-circular v-if="isLoading" class="loading-placeholder" color="error" indeterminate></v-progress-circular>
    <ErrorPlaceholder v-else-if="!isLoading && error" @onTapTryAgain="moviesStore.fetchPopularMovies()"/>
    <div v-else-if="!isLoading && !error" class="movies-section" >
      <span>Populares</span>
      <div ref="popularMoviesList" @wheel="handleScrollMovieLists" class="movies-list">
        <MovieItem
          v-for="movie in getPopularMovies"
          :key="movie.id"
          :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useLoadingStore } from '@/stores/loading';
  import { useMoviesStore } from '@/stores/movies';
  import { storeToRefs } from 'pinia';

  const popularMoviesList = ref();
  const moviesStore = useMoviesStore()
  const { error, getPopularMovies } = storeToRefs(moviesStore);
  const { isLoading } = storeToRefs(useLoadingStore());

  moviesStore.fetchPopularMovies();

  watch((isLoading), () => {
    console.log(isLoading.value);
  })

  const handleScrollMovieLists = (event: WheelEvent) => {
    event.preventDefault();
    
    popularMoviesList.value.scrollLeft += event.deltaY * 2;
  }
</script>

<style scoped lang="scss">
  .home {
    position: relative;
    padding: 40px 0px;
    overflow-y: visible;
    overflow-x: hidden;
    display: flex;
    height: 100vh;
    width: 100%;

    span {
      margin: 0 24px;
    }

    .loading-placeholder {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .movies-section {
      overflow-x: hidden;

      .movies-list {
        display: inline-flex;
        padding: 12px 0px;
        overflow-x: scroll;
        scroll-behavior:smooth;
        width: 100%;
        padding: 0 24px;
      }
    }
  }
</style>
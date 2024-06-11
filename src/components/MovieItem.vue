<template>
  <div class="movie-container">
    <v-img class="movie-image" aspect-ratio="9:16"
      width="156"
      cover
      :src="imagesApiBaseUrl + props.movie.poster_path">
    </v-img>
    <div class="movie-title">{{ props.movie.title }}</div>
  </div>
</template>

<script setup lang="ts">
import { IMovie } from '@/interfaces/api/resources/movie';

  const imagesApiBaseUrl = import.meta.env.VITE_IMAGE_API_BASE_URL;
  const props = defineProps<{
    movie: IMovie,
  }>();
</script>

<style scoped lang="scss">
  .movie-container {
    margin: 12px 4px;
    min-width: 156px;
    background-color: rgb(24, 24, 24);
    position: relative;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.199);
    flex-direction: column;
    gap: 16px;
    overflow: clip;
    transition: 0.5s;

    &:hover {
      cursor: pointer;
      transform: scale(1.02);
      box-shadow: 4px 4px 10px 0px rgba(78, 78, 78, 0.203);

      .movie-image::after {
        height: 20px;
      }
    }

    .movie-title {
      padding: 8px;
      height: 100%;
    }

    .movie-image {
      position: relative;

      &::after {
        content: '';
        width: 100%;
        height: 20%;
        bottom: 0;
        position: absolute;
        transition: 0.3s;
        background-image: linear-gradient(to bottom, transparent, rgb(24, 24, 24))
      }
    }
  }
</style>
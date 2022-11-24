<template>
  <div>
    <form @submit.prevent="fetchMovies()">
      <BasicInput
        v-model="search"
        label="Search a movie:"
        placeholder="Avengers"
      />
      <input
        type="submit"
        value="Search"
      >
    </form>
    <div id="result">
      <ul>
        <li v-for="movie of movies">
          <router-link :to="{name: 'movie', params: { movieId: movie.imdbID}}">
            {{ movie.Title }}
          </router-link>
          <a :href="`https://imdb.com/title/${movie.imdbID}`">
            imdb
          </a>
          </route-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BasicInput from '../components/BasicInput.vue'
import { searchMovies } from '../api/api-client'

export default {
  name: 'AppMovies',
  components: {
    BasicInput,
  },
  data () {
    return {
      search: '',
      movies: [],
    }
  },
  methods: {
    fetchMovies () {
      searchMovies(this.search)
        .then(data => {
          this.movies = data.response.Search
        })
    },
  },
}
</script>

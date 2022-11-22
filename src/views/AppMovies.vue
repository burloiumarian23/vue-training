<template>
  <div>
    <form @submit.prevent="fetchMovies()">
      <BasicInput
        label="Search a movie:"
        v-model="search"
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
          <a :href="`https://imdb.com/title/${movie.imdbID}`" >
            <a href="http://www.imdb.com/find?">{{ movie.Title }}</a>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BasicInput from '../components/BasicInput.vue'
import { searchMovies } from '../api/api-client'

export default {
  name: "AppMovies",
  components: {
    BasicInput,
  },
  data() {
    return {
      search: '',
      movies: [],
    }
  },
  methods: {
    fetchMovies() {
      searchMovies(this.search)
        .then(data => {
          this.movies = data.response.Search
        })
    }
  }
}
</script>
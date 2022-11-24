import { getJson, postJson } from './fetch-client.js'
import { authRoute, omdbApiUrl } from './api-routes.js'

export const login = (username, password) => {
  return postJson(authRoute, { body: { username, password } })
}

export const searchMovies = (query) => getJson(omdbApiUrl + '?s=' + query)

import results from '../../mocks/with-result.json'
import noResults from '../../mocks/no-result.json' //eslint-disable-line

export function useMovies () {
  const movies = results.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { movies: mappedMovies }
}

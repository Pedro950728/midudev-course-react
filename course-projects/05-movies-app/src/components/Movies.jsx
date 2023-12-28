export const ListOfMovies = ({ movies }) => {
  return (
    <ul>
      {
              movies.map(movie => (
                <li key={movie.imdbID}>
                  <h3>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                  <img src={movie.Poster} />
                </li>))
            }
    </ul>
  )
}

export const NoMovies = () => <p>No movies found</p>

export const Movies = ({ hasMovies, movies }) => {
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <p>No movies found</p>
  )
}

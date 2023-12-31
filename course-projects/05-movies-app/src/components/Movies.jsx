export const ListOfMovies = ({ movies }) => {
  return (
    <ul>
      {
        movies.map(movie => (
          <li
            key={movie.id}
          >
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} />
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

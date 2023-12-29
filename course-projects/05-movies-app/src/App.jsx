import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App () {
  const { movies } = useMovies()
  const hasMovies = movies?.length > 0

  return (
    <main className='page'>
      <header>
        <h1>Movies App</h1>
        <form className='form'>
          <input placeholder='Avengers,Terminator,Spider-man' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <section>
        <Movies movies={movies} hasMovies={hasMovies} />
      </section>
    </main>
  )
}

export default App

import './App.css'
import results from '../mocks/with-result.json'
import noResults from '../mocks/no-result.json' //eslint-disable-line
import { Movies } from './components/Movies'

function App () {
  const movies = results.Search
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

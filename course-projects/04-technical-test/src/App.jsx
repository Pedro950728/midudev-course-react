import { useEffect, useState } from 'react'

export const App = () => {
  const [breed, setBreed] = useState(null)

  useEffect(() => {
    fetch('https://catfact.ninja/breeds')
      .then((response) => response.json())
      .then((data) => setBreed(data.breeds))
  }, [])

  return (
    <main>
      <h1>Cats of the World</h1>
      <p>{breed}</p>
    </main>
  )
}

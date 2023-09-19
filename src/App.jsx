import { useState, useEffect } from 'react'
import './App.css'
import Form from './Components/Form'
import MovieDisplay from './Components/MovieDisplay'

function App() {
const apiKey= "98e3fb1f"

const [movie, setMovie] = useState(null);

const getMovie = async (searchTerm) => {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
  const data = await response.json();
  setMovie(data);
} catch(e){
  console.error(e)
}


useEffect(() => {
  getMovie("Clueless");
    }, []);

  return (
    
    <div className="App">
      <Form moviesearch={getMovie}/>
      <MovieDisplay />
    </div> 
     
    
  )
  }

export default App

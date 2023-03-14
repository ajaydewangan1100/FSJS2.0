
import { useEffect, useState, createContext } from 'react'
import axios from "axios";
import CardContainer from './components/CardContainer';
import SearchForm from './components/SearchForm';
import "./index.css"

export const myContext = createContext();

function App() {

  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  
  
  const apiSearch = async () => {
    let apiURL = "https://www.omdbapi.com/?s=" + search + "&apiKey=f155c772";
    await axios.get(apiURL)
    // .then(Response => Response.json())
    .then(Response => setMovies(Response.data.Search))
    // .then(() => console.log(typeof movies, "what"))
    .catch(error => console.log(error))  
  }

  useEffect( 
    () => {
    apiSearch() 
  },[search] );

  const searchedMovies = () => {
    console.log("done");
  }

  return (
    // <myContext.Provider value={ movies }>
      <div className="w-full h-[100vh] px-4 max-w-[1280px] mx-auto" >
        <SearchForm setSearch={ setSearch } search={search} />
        <CardContainer movies={movies} />
      </div>
    // </myContext.Provider> 
  )
}

export default App

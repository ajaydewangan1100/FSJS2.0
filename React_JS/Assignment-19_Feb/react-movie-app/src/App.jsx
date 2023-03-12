import { useEffect, useState } from 'react'
// import axios from "react-axios";
import CardContainer from './components/CardContainer';
import SearchForm from './components/SearchForm';
import "./index.css"

function App() {

  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState("");

  
  
  const apiSearch = async () => {
    
    let apiURL = "https://www.omdbapi.com/?s=" + search + "&apiKey=f155c772";
    await fetch(apiURL)
    .then(Response => Response.json())
    .then(data => setMovies(data))
    .then(() => console.log(movies))
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
    <div className="w-full h-[100vh] px-24 " >
      <SearchForm setSearch={ setSearch } search={search} />
      <CardContainer  />
    </div>
  )
}

export default App

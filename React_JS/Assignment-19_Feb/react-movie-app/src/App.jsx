import { useEffect, useState } from 'react'
// import axios from "react-axios";
import CardContainer from './components/CardContainer';
import SearchForm from './components/SearchForm';
import "./index.css"

function App() {

  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState("");

  
  
  const apiSearch = async () => {
    // console.log(search);
    let apiURL = "https://www.omdbapi.com/?s=" + search + "&apiKey=f155c772";
    await fetch(apiURL)
    .then(Response => Response.json())
    .then(data => setMovies(data))
    .then(() => console.log(movies))
    .catch(error => console.log(error))  
  }

  useEffect( () => {
    console.log(search)
    apiSearch() 
    console.log(search)
  },[search] );

  const searchedMovies = () => {
    console.log("done");
  }

  return (
    <div className="w-full bg-gray-100 h-[100vh] p-3" >
      <SearchForm setSearch={ setSearch } search={search} />
      <CardContainer  />
    </div>
  )
}

export default App

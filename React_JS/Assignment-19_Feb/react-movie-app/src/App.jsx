
import { useEffect, useState, createContext } from 'react'
import axios from "axios";
import CardContainer from './components/CardContainer';
import SearchForm from './components/SearchForm';
import "./index.css"

export const myContext = createContext();

function App() {

  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [clickedImdbID, setClickedImdbId] = useState();
  const [clickedMovie, setClickedMovie] = useState();
  
  
  const apiSearch = async () => {
    let apiURL = "https://www.omdbapi.com/?s=" + search + "&apiKey=f155c772";
    await axios.get(apiURL)
    .then(Response => setMovies(Response.data.Search))
    .catch(error => console.log(error))  
  }

  // Use Effect Here --> One is run when type on search box
  useEffect(
    () => {
      apiSearch() 
  },[search] );

  //  this run when clicking any card
  useEffect( 
    () => {
      cardClicked(clickedImdbID) 
  },[clickedImdbID] );

  
  const cardClicked = () => {
    console.log(clickedImdbID);
  }

  return (
    <myContext.Provider value={ setClickedImdbId }>
      <div className="w-full h-[100vh] px-4 max-w-[1280px] mx-auto text-center" >
        <h1 className='font-bold text-[22px] text-[#eee]  rounded w-[90%] min-w-[230px] max-w-[600px] bg-gray-800 mx-auto my-1 py-1'>Movie Search App</h1>
        <SearchForm setSearch={ setSearch } search={search} />
        <CardContainer movies={movies} />
      </div>
    </myContext.Provider> 
  )
}

export default App

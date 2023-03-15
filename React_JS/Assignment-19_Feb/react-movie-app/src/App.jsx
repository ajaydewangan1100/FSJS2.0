
import React from 'react';
import { ReactDOM } from 'react-dom/client';
import { useEffect, useState, createContext } from 'react'
import axios from "axios";
import CardContainer from './components/CardContainer';
import SearchForm from './components/SearchForm';
import "./index.css"
import ClickedMovieInfo from './components/ClickedMovieInfo';
import ShowingMovieInfo from './components/ShowingMovieInfo';

 const myContext = createContext();

function App() {

  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [clickedImdbID, setClickedImdbId] = useState("");
  
  
  const apiSearch = async () => {
    let apiURL = "https://www.omdbapi.com/?apiKey=f155c772&s=" + search;
    await axios.get(apiURL)
    .then(Response => setMovies(Response.data.Search))
    .catch(error => console.log(error))  
  }

  // Use Effect Here --> One is run when type on search box
  useEffect(
    () => {
      apiSearch() 
  },[search] );

  
  const cardClicked = async (id) => {
    setClickedImdbId(id);
    console.log(clickedImdbID, id, ":lklk");
  }


  return (
    <myContext.Provider value={{ setClickedImdbId, cardClicked }}>
      <div>
        {clickedImdbID ?
          <ShowingMovieInfo movieId={clickedImdbID} setClickedImdbId={setClickedImdbId} /> : null
        }
        <div className="w-full h-auto px-4 max-w-[1280px] mx-auto text-center" >
          <h1 className='font-bold text-[22px] text-[#eee]  rounded w-[90%] min-w-[230px] max-w-[600px] bg-gray-800 mx-auto my-1 py-1'>Movie Search App</h1>
          <SearchForm setSearch={ setSearch } search={search} setClickedImdbId={setClickedImdbId} />
          
          <CardContainer movies={movies} toggle={true} />
        </div>
        </div>
    </myContext.Provider> 
  )
}

export default App
export {myContext};

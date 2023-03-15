
import React, { useContext, useEffect, useState } from 'react';
import { ReactDOM } from 'react-dom/client';
import axios from 'axios';

const ShowingMovieInfo = ({ movieId, setClickedImdbId }) => {

  
  const [toggle, setToggle] = useState(false);
  const [clickedMovie, setClickedMovie] = useState([]);

  const ToggleFunction = () => {
    
    if(!toggle){document.body.classList.add("overflow-hidden")}
    else{document.body.classList.remove("overflow-hidden")}
    
    toggle && setClickedImdbId("")
    setToggle(!toggle);
  }

  
  const cardClicked = async () => {
    
    let movieURL = "https://www.omdbapi.com/?apiKey=f155c772&i=" + movieId;
    
    await axios.get(movieURL)
    .then(Response => setClickedMovie(Response.data))
    .catch(error => console.log(error))  

  }

  
  useEffect(() =>{
    cardClicked()
    ToggleFunction();
  }
  ,[])
  

  return(
    <>
      {
       clickedMovie.length == 0 ? 
       <h2 className='text-4xl md:text-xl fixed  text-sky-700 top-36  md:left-[0px] left-[45%] '> Loading ... </h2> 
       :
        (toggle && (
          <div className=' w-[100vw] h-[100vh] border border-red-700 fixed flex justify-center bg-white bg-no-repeat bg-cover bg-center backdrop-opacity-10 backdrop-invert bg-white/30 z-10' 
          style={{backgroundImage: `url( ${ clickedMovie.Poster } )`}} >
          
          <div className='flex flex-wrap relative justify-around gap-4 text-left  p-8 md:py-4 rounded bg-gray-100 self-center backdrop-opacity-10 backdrop-invert bg-white/40  ' 
          style={{backgroundImage: `url( ${ clickedMovie.poster } )`}}>

            <div className='w-[230px] max-w-[400px] min-w-[230px]'>
                <img src={clickedMovie.Poster} className='h-[300px] min-w-[100%] rounded' />
            </div>
            <div className='p-3 rounded font-bold text-zinc-100 flex flex-col leading-8 bg-gray-600'>
                <h2>Title : {clickedMovie.Title} </h2>
                {clickedMovie.Released!== "N/A" && <h3>Released Date : {clickedMovie.Released} </h3>}
                {clickedMovie.Director!== "N/A" && <h3>Director : {clickedMovie.Director} </h3>}
                {clickedMovie.Runtime!== "N/A" && <h3>Runtime : {clickedMovie.Runtime} </h3>}
                {clickedMovie.Genre!== "N/A" && <h3>Genre : {clickedMovie.Genre} </h3>}
                {clickedMovie.imdbRating!== "N/A" && <h3>Imdb Rating : {clickedMovie.imdbRating} </h3>}
                {clickedMovie.BoxOffice!== undefined && clickedMovie.BoxOffice!== "N/A" && 
                <h3>Collection : {clickedMovie.BoxOffice} </h3>}
            </div>
            <button className='mr-1 mt-1 px-1.5 rounded hover:bg-gray-700 duration-200 hover:text-white font-bold absolute top-0 right-0' onClick={() => ToggleFunction()}>X</button>
          </div>
        </div>
        ))


      }
    </>
  )
}

export default ShowingMovieInfo;
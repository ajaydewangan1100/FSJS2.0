

import React from 'react'

const Modal = ({ movieId }) => {

    
    const [toggle, setToggle] = useState(false);
    const [clickedMovie, setClickedMovie] = useState([]);

    const ToggleFunction = () => {

    }

    const cardClicked = async () => {
    
        let movieURL = "https://www.omdbapi.com/?apiKey=f155c772&i=" + movieId;
        
        await axios.get(movieURL)
        .then(Response => setClickedMovie(Response.data))
        .then(Response => console.log("Response"))
        .catch(error => console.log(error))  
        
    }

    
    useEffect(() =>{
    cardClicked();
    }
    ,[])


  return (
    <div className='w-[100vw] h-[100vh] fixed top-0 right-0 bottom-0 left-0'>
        <div className='w-[100vw] h-[100vh] bg-gray-700 opacity-80 fixed'></div>
        <div className='absolute top-[40%] left-[50%] origin-[-50%_-50%] origin-center '>
            <div className='max-w-[400px] min-w-[230px] rounded'>
                <img src={clickedMovie.Poster} className='h-[300px] min-w-[100%] ' />
            </div>
            <div className='p-3 rounded font-bold text-zinc-200 flex flex-col leading-8 bg-gray-400 '>
                <h2>Title : {clickedMovie.Title} </h2>
                {clickedMovie.Released!== "N/A" && <h3>Released Date : {clickedMovie.Released} </h3>}
                {clickedMovie.Director!== "N/A" && <h3>Director : {clickedMovie.Director} </h3>}
                {clickedMovie.Runtime!== "N/A" && <h3>Runtime : {clickedMovie.Runtime} </h3>}
                {clickedMovie.Genre!== "N/A" && <h3>Genre : {clickedMovie.Genre} </h3>}
                {clickedMovie.imdbRating!== "N/A" && <h3>Imdb Rating : {clickedMovie.imdbRating} </h3>}
                {clickedMovie.BoxOffice!== "N/A" && <h3>Collection : {clickedMovie.BoxOffice} </h3>}
            </div>
            <button className='mr-1 mt-1 px-1.5 rounded hover:bg-gray-700 duration-200 hover:text-white font-bold absolute top-0 right-0' 
            onClick={() => ToggleFunction()}>X</button>
        </div>
    </div>
  )
}

export default Modal
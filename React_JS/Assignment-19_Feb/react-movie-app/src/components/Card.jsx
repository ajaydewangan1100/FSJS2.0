
import React, { useContext } from "react";
import {myContext} from "../App";


const Card = ({id, poster, title, year, cardClicked}) => {
  
  const rcvdFun_setClickedImdbId = useContext(myContext);
  
    const cardClicking = () => {
      rcvdFun_setClickedImdbId.cardClicked(id, poster);
      // console.log(id);
    }
  
    return (
      <div key={id} onClick={cardClicking} className="rounded p-2 shadow bg-gray-500 w-[230px] max-w-[400px] min-w-[230px] hover:bg-gray-300 duration-300 ">
        <img src={poster} className="h-[300px] min-w-[100%] rounded hover:pointer-events-none cursor-pointer-none" />
        <div className='text-left'>
          <h3 className='font-bold text-[14px] text-yellow-500'>{year}</h3>
          <span className='font-semibold text-white text-left hover:pointer-events-none '>{title}</span>
        </div>
      </div>
    )
  }

  export default Card;


import React from 'react';

import rock from "../assets/rock.png";
import paper from "./paper.png";
import scissor from "../assets/scissor.png";


const FirstPage = ({user}) => {
  

  return (
    <div className='w-[80%] sm:w-[40%] min-w-[340px] '>
        {user ? 
        <h1 className='text-[2.5vh] font-bold text-[#45a012] border rounded bg-gray-200 inline px-4 py-1'>Choose From Here</h1> 
        :
        <h1 className='text-[2.5vh] font-bold text-[#d5a012] border rounded bg-gray-200 inline px-4 py-1 '> Computer </h1> }
        <div className='flex w-[80%] sm:w-[100%] m-auto justify-around mt-[20px] '>
            <img src={rock} className={user ? "imageEffectCommon imageEffectUser" : "imageEffectCommon"} onClick={() => alert()} />
            <img src={paper} className={user ? "imageEffectCommon imageEffectUser" : "imageEffectCommon"} onClick={() => alert()} />
            <img src={scissor} className={user ? "imageEffectCommon imageEffectUser" : "imageEffectCommon"} onClick={() => alert()} />
        </div>
    </div>
  )
}

export default FirstPage;
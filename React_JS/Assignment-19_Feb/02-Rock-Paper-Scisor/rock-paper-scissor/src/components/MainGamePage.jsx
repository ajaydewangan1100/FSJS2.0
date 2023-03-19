

import React, { useEffect, useState } from 'react';

import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissor from "../assets/scissor.png";


const MainGamePage = ({ computerChooosing, winLoss, user, Clicked}) => {

  const [compSideAnimation, setCompSideAnimation ] = useState("imageEffectCommon");

  useEffect(() => {
    if(computerChooosing){
      setCompSideAnimation("imageEffectCommon animate-compImages");
    }
  }, [computerChooosing])

  useEffect(() => {
    setCompSideAnimation("imageEffectCommon");
  },[winLoss])

  const clickingImage = (value) => {
    Clicked(value);
  }
   

  return (
    <div className='w-[85%] sm:w-[45%] min-w-[340px] p-4 rounded border-2 border-gray-400 '>
        {user ? 
        <div className='flex justify-center gap-[2vw]  '>
        <h1 className='text-[3.5vh] font-bold text-[#d5a012] rounded bg-gray-300 inline px-3 my-auto '>You</h1>
        
        <h1 className='text-[2vh] font-bold text-[#45a012] border rounded bg-gray-200 inline px-3 my-auto md:text-[2vh] lg:text-[2.5vh] '>Choose From Here</h1> 
        </div>
        :
        <h1 className='text-[3vh] font-bold text-[#d5a012] border rounded bg-gray-200 inline px-4 '> Computer </h1> }

        <div className='flex w-[100%] justify-around mt-[50px] '>
            <img src={rock} className={ user ? "imageEffectCommon imageEffectUser " : compSideAnimation} onClick={() => (user && !computerChooosing) && clickingImage("R")} />
            <img src={paper} className={user ? "imageEffectCommon imageEffectUser" : compSideAnimation} onClick={() => (user && !computerChooosing) &&  clickingImage("P")} />
            <img src={scissor} className={user ? "imageEffectCommon imageEffectUser" : compSideAnimation} onClick={() => (user && !computerChooosing) && clickingImage("S")} />
        </div>
    </div>
  )
}

export default MainGamePage;
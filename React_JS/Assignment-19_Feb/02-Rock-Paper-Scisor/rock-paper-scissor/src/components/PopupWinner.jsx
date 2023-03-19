

import React, { useEffect, useState } from 'react';

import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissor from "../assets/scissor.png";

const PopupWinner = ({ winLoss, sendInPopup, finalWin }) => {
    
    const [compImage, setCompImage] = useState()
    const [userImage, setUserImage] = useState();
    const [winning, setWinning] = useState({});

    const items = {R:rock, P:paper, S:scissor};

    useEffect(() => {
        setCompImage(items[sendInPopup.computerRandom]);
        setUserImage(items[sendInPopup.userClicked]);
    }, [])
    
   const closeRestart = () => {
    sendInPopup.resetAll();
    winning.decision &&
    sendInPopup.resetTotal();
   }
   
   useEffect(() => {
    (finalWin.length === 2 && (finalWin.reduce((a, b) => a + b, 0) === -2)) && 
        setWinning({decision:"Loss",color:"text-red-400"});
        
    (finalWin.length === 2 && (finalWin.reduce((a, b) => a + b, 0) === 2)) && 
    setWinning({decision:"Win",color:"text-green-400"});

    finalWin.length >= 3 &&
    (
        finalWin.reduce((a, b) => a + b, 0) > 0 ? 
        setWinning({color:"text-green-400",decision:"Win"})
        :
        setWinning({color:"text-red-400",decision:"Loss"})
    )
    }, [])


  return (
    <div className='w-[100vw] h-[100%] absolute top-0 '>
        <div className='w-[100%] h-[100%] border-red-800 border border-[2px] bg-[#000000a8] absolute top-0 z-4' onClick={() => closeRestart()}></div>
        <div className=' absolute w-[95%] md:w-[70%] lg:w-[60%] h-[60vw] max-h-[400px] min-h-[250px]  top-[22vh] md:top-[16vh] lg:top-[12vh] origin-[50] left-0 right-0 ml-auto mr-auto '>
            <div className='w-[100%] h-[85%] flex flex-wrap '>
                <div className='w-[50%] my-auto flex  '>
                    <img src={compImage} className="imageEffectCommon w-[60%] animate-motionComp   " />
                </div>
                <div className='w-[50%] my-auto flex justify-end'>
                    <img src={userImage} className="imageEffectCommon w-[60%] animate-motionUser " />
                </div>
            </div>
            <div className='flex justify-center absolute bottom-0 w-[100%] h-[15%] content-center items-center '>
                {
                (finalWin && finalWin.length < 3) && !winning.decision ?
                <h1 className='animate-scaleThings delay-1000 absolute bottom-[-10px] text-[10vw] text-[#eee] duration-[5000ms] '>{winLoss}</h1>
                : 
                (
                <h1 className='animate-scaleThings delay-1000 absolute bottom-[-10px] text-[10vw] duration-[5000ms] text-[#eee] '>You <span className={winning.color}>{winning.decision}</span> The Game!!!</h1>
                )
                }
                <button className='border rounded-[50%] py-4 px-6 absolute absolute bottom-[-150px] md:bottom-[-100px] text-red-600 font-bold ' onClick={() => closeRestart()}>X</button>
            </div>
        </div>

    </div>
  )
}

export default PopupWinner;

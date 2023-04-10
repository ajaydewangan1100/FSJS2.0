

import React, { useEffect, useState } from 'react';

import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissor from "../assets/scissor.png";


const Instructions = () => {

    const [show, setShow] = useState(true);

    useEffect(() => {},[show])
    
    const closeInstruction = () => {
        setShow(false);
    }

  return (show && 
    <div className='w-[100vw] h-[100%] absolute top-0 '>
        <div className='w-[100%] h-[100%] border-red-800 border border-[2px] bg-[#000000a8] absolute top-0 z-4' onClick={() => closeInstruction()}></div>
        <div className=' absolute w-[95%] md:w-[70%] lg:w-[60%] max-h-[400px] min-h-[250px]  top-[14vh] md:top-[12vh] lg:top-[5vh] origin-[50] left-0 right-0 ml-auto mr-auto '>
            <h1 className=' text-red-300 text-[4vw] md:text-[2vw] font-bold border inline-block rounded p-1 px-4 '>Instructions.</h1>
                <h1 className='text-white text-[4vw] md:text-[2.5vw] text-[#6c65e2] font-semibold my-2 rounded border border-red-400 py-1 max-w-[80%] sm:max-w-[80%] mx-auto '>Total 3 Rounds : Win min 2-Rounds <br />If same option choosen, round not count.</h1>
            <div className='w-[70%] min-w-[340px] h-[95%] mx-auto bg-gray-400 flex gap-3 rounded-lg flex-col items-center '>

                <div className='flex justify-center items-center mt-3'>
                <img src={rock} className="w-[12%] " />
                 <span className='text-white font-bold '> &nbsp;&nbsp; VS &nbsp;&nbsp; </span>  
                <img src={paper} className="w-[12%]" />
                <span className='text-white font-bold text-xl'> &nbsp;&nbsp;{"=>"}&nbsp;&nbsp;&nbsp;&nbsp; </span>  
                <img src={paper} className="w-[12%]" />
                </div>

                <div className='flex justify-center items-center my-3 '>
                <img src={paper} className="w-[12%] " />
                 <span className='text-white font-bold '> &nbsp;&nbsp; VS &nbsp;&nbsp; </span>  
                <img src={scissor} className="w-[12%]" />
                <span className='text-white font-bold text-xl'> &nbsp;&nbsp;{"=>"}&nbsp;&nbsp;&nbsp;&nbsp; </span>  
                <img src={scissor} className="w-[12%]" />
                </div>

                <div className='flex justify-center items-center mb-4 '>
                <img src={scissor} className="w-[12%] " />
                 <span className='text-white font-bold '> &nbsp;&nbsp; VS &nbsp;&nbsp; </span>  
                <img src={rock} className="w-[12%]" />
                <span className='text-white font-bold text-xl'> &nbsp;&nbsp;{"=>"}&nbsp;&nbsp;&nbsp;&nbsp; </span>  
                <img src={rock} className="w-[12%]" />
                </div>

            </div>
            <div className='flex justify-center absolute bottom-0 w-[100%] h-[15%] content-center items-center '>
                <button className='border rounded-[50%] py-4 px-6 absolute top-[150px] text-red-600 font-bold ' onClick={() => closeInstruction()}>X</button>
            </div>
        </div>

    </div>
  )
}

export default Instructions

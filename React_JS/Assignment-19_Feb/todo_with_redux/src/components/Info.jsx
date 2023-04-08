import React from 'react'
import { FiLinkedin, FiGithub, FiCode, FiHeart } from "react-icons/fi";

const Info = ({ setInfo }) => {
  return (
    
    <div onClick={() => setInfo(false)}
    className='fixed w-[100vw] h-[100vh] top-0 left-0 bg-[#45454545] flex flex-col justify-center items-center p-3'>
      <div className='rounded bg-gray-500 text-white font-semibold text-xl p-4 max-w-[650px] text-center drop-shadow-2xl '>
        <span>You can <i>create, read, update </i>and <i>delete</i> the TODO. <br /> 
        and also search by typing. <br />
        <hr className='my-2 w-[50vw] mx-auto max-w-[300px] ' />
        Todo's are stored on your local storage of browser, so you can access it anytime. </span>
        <hr className='my-2 w-[50vw] mx-auto max-w-[300px] ' />
        <i className='text-yellow-100 text-sm flex flex-col justify-center my-3 '>If you want to connect me <br /> 
          <span className='text-base mb-3'>
            <a href='https://www.linkedin.com/in/ajaydewangan1100/'>
              Linkedin -&nbsp;<FiLinkedin className='mx-auto mt-1 border text-3xl p-1 rounded text-green-400 inline  hover:bg-gray-100' /></a> &nbsp;&nbsp;&nbsp;
              Github - &nbsp;
            <a href='https://github.com/ajaydewangan1100'>
              <FiGithub className='mx-auto mt-1 border text-3xl p-1 rounded text-green-400 inline hover:bg-gray-100' /></a>
              
          </span>
          <br />
          <span className='flex items-center justify-center'>
            Code of this Todo Project is here -  &nbsp;
            <a href='https://github.com/ajaydewangan1100/FSJS2.0/tree/main/React_JS/Assignment-19_Feb/todo_with_redux'> 
            <FiCode className='mx-auto border text-3xl p-1 rounded text-green-400 inline  hover:bg-gray-100' /></a>
          </span>
        </i>
        <hr className='my-2 w-[50vw] mx-auto max-w-[300px] ' />
        <i className="text-sm "> This website is made with&nbsp;
        <FiHeart className='inline text-red-700 fill-red-700 g-red-700 ' />&nbsp;by&nbsp;
          <a className='text-yellow-400 underline' href="https://www.linkedin.com/in/ajaydewangan1100/" target="_blank">Ajay</a>.</i>
      </div>

      <button onClick={() => setInfo(false)}
      className='px-3 py-1 text-red-400 text-xl hover:font-semibold hover:scale-150 duration-200 border rounded-full mt-4 '>X</button>
    </div> 
  )
}

export default Info
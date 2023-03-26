import { useEffect, useState } from 'react'
import MainGamePage from './components/MainGamePage';
import PopupWinner from './components/PopupWinner';

import { IoStarSharp } from "react-icons/io5";
import round from "./assets/round.png";
import Instructions from './components/Instructions';

function App() {
  const [userClicked, setUserClicked] = useState("");
  const [computerRandom, setComputerRandom] = useState("");
  const [winLoss, setWinLoss] = useState("");
  const [finalWin, setFinalWin] = useState([]);
  const [computerChooosing, setComputerChoosing] = useState(false);
  const str = "RPS";

  const Clicked = (value) => {
    finalWin.length >= 3 && setFinalWin([]);
    setComputerChoosing(true)
    setUserClicked(value); 
    setComputerRandom(str[Math.floor(Math.random() * 3)]);
  }
  
  useEffect(() => {
    userClicked && computerRandomCreator();
    
  }, [computerRandom])


  const computerRandomCreator = () => {
    console.log("random creator ");
    console.log(finalWin, " : vin");

    setTimeout(() => {

      if(userClicked === computerRandom) {
        setWinLoss("Round Tie!");
      }
      else if(
        userClicked === str[0] && computerRandom === str[1] || 
        userClicked === str[1] && computerRandom === str[2] ||
        userClicked === str[2] && computerRandom === str[0]
        ){
          setWinLoss("You Loss round!");
          setFinalWin([...finalWin, -1]);
        }
        else if(
          userClicked === str[2] && computerRandom === str[1] || 
          userClicked === str[0] && computerRandom === str[2] ||
          userClicked === str[1] && computerRandom === str[0]
          ){
            setWinLoss("You Win Round!");
            setFinalWin([...finalWin, 1]);
          }
          
      setComputerChoosing(false);
      
    }, 800);
  }


  const resetAll = () => {
    setComputerChoosing(false)
    setUserClicked("");
    setComputerRandom("");
    setWinLoss("");
  } 

  const resetTotal = () => {
    resetAll();
    setFinalWin([]);
  }

  const sendInPopup = { userClicked, winLoss, computerRandom, resetAll, resetTotal, finalWin };

  return (

    <div className="m-auto text-center bg-[#128989cc] pt-[1px] ">
      <div className='flex justify-center mx-auto mt-5 '>
        <h1 className='w-[40%] m-2 text-[#128989] min-w-[250px] border rounded font-bold text-[lg] bg-gray-200'>Rock Paper Scissor</h1>
        {finalWin &&
        <h1 className='mx-1 rounded flex m-auto'>
          { 
          finalWin.length === 0 ? 
          [0,0,0].map(f => (<IoStarSharp key={Math.random()} className='text-gray-300 my-1 mx-[2px]'/>
          ))
          :
          finalWin.map(f => (
            (f === 1) && <IoStarSharp key={f * Math.random()} className='text-yellow-300 my-1 mx-[2px]' /> ||
            (f === 0) && <IoStarSharp key={f * Math.random()} className='text-gray-300 my-1 mx-[2px]'/> ||
            (f === -1) && <IoStarSharp key={f * Math.random()} className='text-red-400 my-1 mx-[2px]'/>
          ))
          }
          </h1>}
        </div>
        <div className='w-[98%] h-[100%] pb-[10vh] m-auto flex flex-wrap            justify-around p-5 gap-8 sm:gap-1 content-around  rounded '>
        <Instructions />
        {computerChooosing &&
        <div className='w-[100%] h-[100vh] absolute bottom-0 bg-[#ff101045] blur-xl'></div>}
        {computerChooosing &&
        <div className=' absolute px-5 py-1 rounded-[20px] top-[40vh] sm:top-[40vh] md:top-[35vw] lg:top-[30vw] text-[4vw] text-[#fff]  border-white-800 border-[3px] flex  items-center '>
          <img src={round} className='animate-spin mx-4 h-[50px] ' />
          computer Choosing...</div>}
        <MainGamePage computerChooosing={computerChooosing} winLoss={winLoss} />
        <div className='border border-gray-500 border-1 block w-[80%] sm:w-[2px] h-[2px] sm:h-[300px] '></div>
        <MainGamePage computerChooosing={computerChooosing} winLoss={winLoss} user={true} Clicked={Clicked} />
      </div>  
      <div className='text-gray-300 py-4'>
        <p> This website is made with &#128159; by 
        <a href="https://www.linkedin.com/in/ajaydewangan1100/" target="_blank" className='text-white font-bold rounded underline mx-[2px] hover:text-[#f2b35d]'> Ajay</a></p></div>
      {winLoss &&
      <PopupWinner setUserClicked={setUserClicked} winLoss={winLoss} setWinLoss={setWinLoss} sendInPopup={sendInPopup} finalWin={finalWin} />}
    </div>
  )
}

export default App

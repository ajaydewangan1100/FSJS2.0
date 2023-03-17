import { useEffect, useState } from 'react'
import MainGamePage from './components/MainGamePage';
import PopupWinner from './components/PopupWinner';

import round from "./assets/round.png";

function App() {
  const [userClicked, setUserClicked] = useState("");
  const [computerRandom, setComputerRandom] = useState("");
  const [winLoss, setWinLoss] = useState("");
  const [clickable, setClickable] = useState(true);
  const [computerChooosing, setComputerChoosing] = useState(false);
  const str = "RPS";

  const Clicked = (value) => {
    setClickable(false);
    setComputerChoosing(true)
    setUserClicked(value); 
    setComputerRandom(str[Math.floor(Math.random() * 3)]);
    console.log(computerRandom, ": under clicked");
  }
  
  useEffect(() => {
    userClicked && computerRandomCreator();
    
  }, [computerRandom])


  const computerRandomCreator = () => {
    console.log("random creator ");

    setTimeout(() => {
      console.log(computerRandom, userClicked, ": under settimeout");

      if(userClicked === computerRandom) {
        console.log(computerRandom," vs ",userClicked, ": same" );
        setWinLoss("Tie!")
      }
      else if(
        userClicked === str[0] && computerRandom === str[1] || 
        userClicked === str[1] && computerRandom === str[2] ||
        userClicked === str[2] && computerRandom === str[0]
        ){
          console.log(computerRandom," vs ",userClicked, ": You Loss" );
          setWinLoss("You Loss!")
        }
        else if(
          userClicked === str[2] && computerRandom === str[1] || 
          userClicked === str[0] && computerRandom === str[2] ||
          userClicked === str[1] && computerRandom === str[0]
          ){
            console.log(computerRandom," vs ",userClicked, ": You Win" );
            setWinLoss("You Win!")
          }
          
      setComputerChoosing(false);
      
    }, 3000);
  }


  const resetAll = () => {
    setClickable(true);
    setComputerChoosing(false)
    setUserClicked("");
    setComputerRandom("");
    setWinLoss("");
  } 

  const sendInPopup = { userClicked, winLoss, computerRandom, resetAll };

  return (

    <div className="m-auto text-center">
      <h1 className='w-[50%] m-2 mt-5  mx-auto text-[#128989] min-w-[300px] border rounded font-bold text-[lg] bg-gray-200'>Rock Paper Scissor</h1>
      <div className='w-[98%] h-[100%] pb-[10vh] m-auto flex flex-wrap justify-around p-5 gap-12 sm:gap-1 content-around '>
        {!clickable &&
        <div className='w-[100%] h-[100vh] absolute bottom-0 bg-[#ff101045] blur-sm'></div>}
        {computerChooosing &&
        <div className=' absolute px-5 py-1 rounded-[20px] top-[35vh] sm:top-[50vh] text-[4vw] text-[#fff]  border-white-800 border-[3px] flex '>
          <img src={round} className='animate-spin mx-4 h-[50px] ' />
          computer Choosing...</div>}
        <MainGamePage computerChooosing={computerChooosing} winLoss={winLoss} />
        <div className='border border-gray-500 border-1 block w-[80%] sm:w-[2px] h-[2px] sm:h-[300px] '></div>
        <MainGamePage computerChooosing={computerChooosing} winLoss={winLoss} user={true} Clicked={Clicked} />
      </div>  
      {winLoss &&
      <PopupWinner setUserClicked={setUserClicked} winLoss={winLoss} setWinLoss={setWinLoss} sendInPopup={sendInPopup} />}
    </div>
  )
}

export default App

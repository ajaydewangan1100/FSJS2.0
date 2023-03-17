import { useState } from 'react'
import FirstPage from './components/FirstPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="m-auto text-center">
      <h1 className='inline bg-gray-500'>Rock Paper Scissor</h1>
      <div className='w-[98%] h-[100%] m-auto flex flex-wrap justify-around p-5 gap-6 sm:gap-1 '>
        <FirstPage  />
          <div className='border border-gray-500 border-1 block w-[80%] sm:w-[2px] h-[2px] sm:h-[80vh] '></div>
        <FirstPage user="true" />
      </div>
    </div>
  )
}

export default App

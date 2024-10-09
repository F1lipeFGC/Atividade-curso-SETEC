import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'
import Title from '../Title'
import Button from '../Button'

function App() {
  const [count, setCount] = useState(2)
  const [text, setText] = useState("")

  const handleInput = (newText) => {
    setText(newText.value);
  }

  
  return (
    <>
    {/* <input value={text} onChange={(e) => setText(e.target.value)}/> */}
    <input value={text} onChange={(e) => handleInput(e.target)} type ="text"/>
    <Title name ={text} paragrafo ={ count > 3}/> 
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button count = {count} setCount={setCount}/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App

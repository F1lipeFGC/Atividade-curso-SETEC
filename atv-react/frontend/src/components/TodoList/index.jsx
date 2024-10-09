import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
       <h1>Lista de Tarefas</h1>
       <form onSubmit={adicionarItem}>
        <input id="input-entrada"
        type='text'
        value={novoItem}
        onChange={(e) =>{
          setNovoItem(e.target.value);
        }} 
        placeholder="Adicionar uma Tarefa"
        />

        <button className="add" type="sumit">
        Add
        </button>


       </form>
      </div>

  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/TodoList.jsx'
import './components/App/TodoList.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // Wrap the App component in StrictMode for better error handling and performance optimization.
  <StrictMode>
    <App />
  </StrictMode>, 
  
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,

  // StrictMode is a dev-only tool that intentionally runs some things (like renders) twice, to help you spot bugs before they cause real problems.
)
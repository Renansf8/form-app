import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RegistersProvider } from './context/context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RegistersProvider>
      <App />
    </RegistersProvider>
  </StrictMode>,
)

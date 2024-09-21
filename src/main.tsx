import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RegistersProvider } from './context/context.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RegistersProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RegistersProvider>
  </StrictMode>,
)

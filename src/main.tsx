import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RegistersProvider } from './context/Context.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material'

const queryClient = new QueryClient()
const rootElement = document.getElementById('root')

const theme = responsiveFontSizes(
  createTheme({
      components: {
          MuiPopover: {
              defaultProps: {
                  container: rootElement,
              },
          },
          MuiPopper: {
              defaultProps: {
                  container: rootElement,
              },
          },
          MuiDialog: {
              defaultProps: {
                  container: rootElement,
              },
          },
          MuiModal: {
              defaultProps: {
                  container: rootElement,
              },
          },
      },
      palette: {
          primary: {
              main: '#546DE5',
          },
      },
  }),
);

export default theme;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RegistersProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </RegistersProvider>
  </StrictMode>,
)

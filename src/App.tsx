import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useAppSelector } from 'Core/Reducers'
import { Routes } from 'Core/Routes'

function App() {
  const { theme } = {
    theme: useAppSelector(({ Theme: { DarkMode } }) => DarkMode),
  }
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          mode: theme,
          // primary: { main: theme === 'dark' ? 'rgba(0,0,0,1)' : blue[500] },
          text: { primary: theme === 'dark' ? '#fff' : '#212121' },
          background: { default: theme === 'dark' ? grey[900] : '#fff' },
        },
        typography: {
          fontFamily:
            "'IBM Plex Sans', Poppins,system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        },
      })}
    >
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  )
}

export default App

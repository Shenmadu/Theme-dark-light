import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import ThemeContext from './context/ThemeContext'

function App() {

  const [theme, setTheme] = useState('light');


  return (
    <div>

      <ThemeContext.Provider value={theme}>
        <Home />
      </ThemeContext.Provider>

      <div class="form-check form-switch">
        <input class="form-check-input"  onChange={()=>{setTheme(theme==='light'?'dark':'light')}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label class="form-check-label" for="flexSwitchCheckDefault">Use Dark Mode</label>
      </div>

     

    </div>
  )
}

export default App

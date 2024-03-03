import { useContext, useState } from 'react'
import './App.css'
import Home from './components/Home'
import ThemeContext from './context/ThemeContext'

function App() {
  const [theme, setTheme] = useState('light');  

  return (
    <div>
      {/* nav bar section start */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={theme}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto ">
              <div className="form-check form-switch">
                <input className="form-check-input navbar-brand" onChange={() => { setTheme(theme === 'light' ? 'dark' : 'light')}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label navbar-brand" for="flexSwitchCheckDefault">Use {theme === 'light' ? 'dark' : 'light'} Mode</label>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* nav bar section end */}
      
      <ThemeContext.Provider value={theme}>
        <Home />
      </ThemeContext.Provider>
     
    </div>
  )
}

export default App

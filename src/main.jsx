import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import NavBar from './header/NavBar.jsx'
import ScrollSpy from './ScrollSpy .jsx'
import Ender from './footer/Ender.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <NavBar/> */}
    {/* <ScrollSpy/> */}
    {/* <Ender/> */}
    {/* <Ender/> */}
  </StrictMode>,
)

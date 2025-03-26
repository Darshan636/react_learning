
// import './App.css'

import Ender from "./footer/Ender"
import NavBar from "./header/NavBar"
import ScrollSpy from "./ScrollSpy "

function App() {
  

  return (
    <> {/* react fragment */}
    <NavBar/>
    <ScrollSpy/>
    <Ender/>

  {/* <div style={{backgroundColor: 'white', padding: 30, borderRadius: 8, margin: '100px 100px 15% 15%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: 300, textAlign: 'center'}}>
  <h2 style={{marginBottom: 20, fontSize: 24, color: '#333'}}>Login</h2>
  <form action="#" method="POST">
    <div style={{marginBottom: 15}}>
      <label htmlfor="username" style={{display: 'block', fontSize: 14, color: '#555'}}>Username</label>
      <input type="text" id="username" name="username" style={{width: '100%', padding: 10, fontSize: 16, border: '1px solid #ccc', borderRadius: 4}} required />
    </div>
    <div style={{marginBottom: 20}}>
      <label htmlfor="password" style={{display: 'block', fontSize: 14, color: '#555'}}>Password</label>
      <input type="password" id="password" name="password" style={{width: '100%', padding: 10, fontSize: 16, border: '1px solid #ccc', borderRadius: 4}} required />
    </div>
    <button type="submit" style={{backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: 4, fontSize: 16, cursor: 'pointer', width: '100%'}}>Login</button>
  </form>
  <p style={{marginTop: 15, fontSize: 14, color: '#777'}}>Don't have an account? <a href="#" style={{color: '#4CAF50', textDecoration: 'none'}}>Sign up</a></p>
</div> */}

    </>
  )
}

export default App

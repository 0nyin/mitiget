import React from "react"
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Home from './components/home/Home'
import Register from "./components/page/Register";
import Otppage from "./components/page/otpPage";
import Dashboard from "./components/page/Dashboard";
import Login from "./components/page/Login";



// import Login from "./components/page/Login";



function App() {
  
  return (
    <>
    
      <Router>
         <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/Register'  element={<Register/>} />
          <Route path='/Login'  element={<Login/>} />
          <Route path='/otppage'  element={<Otppage />} />
          <Route path='/Dashboard'  element={<Dashboard />} />
        </Routes>
      </Router>

    </>
  )
}

export default App

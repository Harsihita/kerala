import React from "react"
import Goto from "./components/Goto"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Stayintouch from "./components/stayintouch"
import Thingstodo from "./components/thingstodo"
import Contactus from "./components/contactus"
import Footer from "./components/footer"
import { Routes, Route } from "react-router-dom"
import "./components/Munnar"
import "./components/index.css"
import MyNavbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <div className="App-2">
     
      <MyNavbar />
       
      <Home/> 
 
      <div className="my-gradient">

      <About />
      <Services /> 
      </div>


      <Stayintouch />
      <Thingstodo />
      <Contactus />
       <Footer /> 
       <Goto/> 
      </div>
    </div>
  );
}

export default App;


 
// <Routes>
// <Route path="/" element={<Home />} />
// <Route path="/about" element={<About />} />
// {/* <Route path="/Services" element={<Services />} /> 
// <Route path="/stayintouch" element={<Stayintouch />} /> 
// <Route path="/thingstodo" element={<Thingstodo />} /> 
// <Route path="/contactus" element={<Contactus />} /> 
// <Route path="/Footer" element={<Footer />} />  */}
// </Routes>
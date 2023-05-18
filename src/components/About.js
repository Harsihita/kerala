import React from "react"
import "./index.css"
import aboutimg from "../images/aboutimg.jpeg"
import imgtop from "../images/imgtop.jpg"

function TextExample() {

//  const ref = useRef()
//  useEffect(()=>{
//   window.scrollTo({
//     top: ref.current.offsetTop,
//     behavior: "smooth"
//   })
//  }
//  ,[])
  return (
    <section className="gradient" >
    <div className="main-about"  id="About">
    <div className="about">
    <h1>About us</h1>
    <h3>We organize interesting trips to kerala</h3>
    <p>Our team has been working throughout kerala for 20 years. 
      We have counted hundreds of travels and thousands of
      satisfied customers.
      This is not all inclusive , but a real unforgatable adventure that you will remember for a lifetime.</p>
      <a>Read more</a><span><i class="fa-sharp fa-solid fa-arrow-right fa-beat"></i></span>
    </div>
    <div  className="img-box"> 
    <img className="about-img" src={aboutimg}/>
    <img className="img-top" src={imgtop} />
    </div>
    </div>
    
    </section>
  );
}

export default TextExample;
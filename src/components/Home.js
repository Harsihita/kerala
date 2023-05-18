import React from "react"
import Button from 'react-bootstrap/Button';
import "./index.css"
import homepageimg from "../images/homepage.jpg"

export default function home(){
   
    return (
        <>
           <div className="main" id="Home">
              <img src={homepageimg}/>
              <h2 >KERALA</h2>
           </div>
           <div className="mb-2 main-button">
             <Button variant="primary" size="lg" style={{background: "#009FBD"}}>
              Explore<span style={{margin:"10px"}}><i class="fa-sharp fa-solid fa-arrow-right fa-beat"></i></span>
             </Button>
           </div>
           
        
        {/* <div className="outer-box">
        <div className="input-box container">
        <Form.Group className="mb-3 search-box">
            <Form.Select placeholder="places to go" ></Form.Select>
            <Form.Select placeholder="trip" />
            <Form.Select placeholder="trip" />
            <Button variant="primary">Primary</Button>{' '}
        </Form.Group>
        </div> */}
        {/* </div> */}
        
        </>
    );
}
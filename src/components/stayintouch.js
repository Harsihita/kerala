import React from "react"
import Button from 'react-bootstrap/Button';

export default function touch(){
    return(
        <div style={{background:"#F7D060" ,height:"240px"}} className="stay-in">
            <div className="Stay-1">

                <h1>Stay in touch</h1>
                <p>Subscribe to our newsletter and receive notification of favorable offers and news. No Spam, just useful information</p>
                <form>
                    <input placeholder="Your E-mail address"/>
                    <Button className="btn" variant="primary">Subscribe</Button>
                </form>
            </div>
            
        </div>
    )
}
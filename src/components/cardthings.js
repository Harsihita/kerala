import React from "react"
import "./index.css"
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import "./Munnar"
export default function cardthings({image,title,description}){

    return(
        <>
        <div className="things-card">
        <Card className="card-1">
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="description">
        <Card.Text>
          {description}
        </Card.Text>

        </div>
        
        <button className="buttn"  variant="info">Read More</button>
      </Card.Body>
    </Card>
    </div>
        </>
    )
}
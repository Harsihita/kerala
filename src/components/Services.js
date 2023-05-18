import React from "react"
import "./index.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function () {
     return (
          <>
               <div className="service">
                    <h1 >Our Services</h1>

                    <div className="box">
                         <div className="box-item">
                              <FontAwesomeIcon className="trip-1" icon={faLocationDot} />
                              <p>Trip planning</p>
                         </div>

                         <div className="box-item">
                              <FontAwesomeIcon className="trip-2" icon={faBus} />
                              <p>Rent a Car</p> </div>
                         <div className="box-item"> 
                              <FontAwesomeIcon className="trip-2" icon={faCompass} />
                              <p>Guide escort</p>
                         </div>

                         <div className="box-item">
                               <FontAwesomeIcon className="trip-4" icon={faHouse} />
                              <p>Housing</p>
                         </div>

                    </div>
               </div>
          </>
     )
}
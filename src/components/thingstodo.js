import React from "react"
import { useState } from "react";
import "./index.css"
import Nav from 'react-bootstrap/Nav';
import "./places"
import Cardthings from "./cardthings"
import Munnar from "./Munnar"
import trivana from "./trivanan"
import kochi from "./kochi"
import Allappuza from "./allappuza"
export default function Thingstodo() {
  const data = {
    Munnar: Munnar,
    Trivanatpuram: trivana,
    Kochi: kochi,
    Allappuza: Allappuza
  }
  const [selectCity, setSelectCity] = useState("Munnar");

  return (
    <>
      <div className="things" id="feature">
        <h1>Things to do</h1>

      
        {Object.keys(data).map(
          (item, index) => (
            <span className="top-bar"
              key={index}
              onClick={() => setSelectCity(item)}>{item}</span>)
        )}
        <hr></hr>
        <div className="things-1">
          {data[selectCity].map((item, index) =>
            <Cardthings {...item} key={index} />)}
        </div>
      </div>
    </>
  )
}
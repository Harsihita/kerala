import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./About"
import "./index.css"; 


function MyNavbar() {

  return (
    <>
    <section className="main-imagebar">
      
    <Navbar >
        
         <Container>
          <Navbar.Brand className="nav-brand">Kerala</Navbar.Brand>
        </Container>
        <Nav className="justify-content-end list" activeKey="/home"> 
        <Nav.Item className="list-1">
          
          <Nav.Link  href="#Home" >Home</Nav.Link>

        </Nav.Item>
        <Nav.Item>

          <Nav.Link href="#About" >About</Nav.Link>

        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#feature" eventKey="link-2">Features</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#contact" eventKey="link-3" >
          Contact us
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
    </section>
    </>
  );
}

export default MyNavbar;
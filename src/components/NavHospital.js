import React, {Component} from 'react';
//import { Link } from 'react-router-dom';
import {NavLink} from  'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import logo from "../assets/logo.png";

export class Navigation extends Component{
    render(){
        return (
            <Navbar collapseOnSelect bg="light" variant="light" fixed="top">
                 <a className="navbar-brand" href="#"><img src={logo} width="40" height="40" /></a>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="justify-content-end" style={{ width: "100%"}}>
                
            <Nav.Link href="/Patients"><bold>Patients List</bold></Nav.Link>
            <Nav.Link href="/hospital/organTestedReport"><bold>Donor Report</bold></Nav.Link>
            <Nav.Link href="/hospital/recipientreport"><bold>Recipient Report</bold></Nav.Link>
            <Nav.Link href="/hospital/transfer"><bold>Transfer</bold></Nav.Link>
                 <Nav.Link align="right"  onClick={this.function = () => {
localStorage.ptspotter_accessToken = null;
localStorage.ptspotter_userId = null;
//localStorage.clear();
window.location.href = '/login';
console.log( "access Token : " + localStorage.ptspotter_accessToken +"\n UserId : " + 
localStorage.ptspotter_userId );
}}>Logout</Nav.Link>
            </Nav>

            </Navbar.Collapse>
          </Navbar>
        );
    }
}
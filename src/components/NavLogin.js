import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from "../assets/logo.png";


export class Navigation extends Component{
    render(){
        return (
            <Navbar collapseOnSelect bg="light" variant="light" fixed="top">
                 <a class="navbar-brand" href="#"><img src={logo} width="40" height="40" /></a>
               <Navbar.Brand href="/">Home</Navbar.Brand>
            </Navbar>
        );
    }
}
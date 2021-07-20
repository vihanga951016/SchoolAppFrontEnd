import React from 'react'
// import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import './navbar.css'
import Icons from './icons'

const navbar = () => {
    return (
        <div id="navbar">
            <div className="nav_icon">
                <i className="fa fa-bars"></i>
            </div>

            <div className="navbar__left">
            <li className="dropdown">
                <a><Icons/></a>
            </li>
            </div>
            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a>
                <a href="#">
    
                </a>
            </div>
        </div>
    )
}

export default navbar

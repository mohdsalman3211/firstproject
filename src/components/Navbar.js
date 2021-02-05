import React from 'react'
import "./Main.css"
import {NavLink} from 'react-router-dom'
function Navbar(){
    return(
        <>
        <div className="nav_container">
            <div className="navbar">
                <div><h3 className="name">SalmanAbraham</h3></div>
                
             <ul className="navbar_ul">
                 <li> <NavLink exact to="/"activeClassName="active_class" className="NavLink">Home</NavLink></li>
                 <li><NavLink to="service" activeClassName="active_class"className="NavLink">Services</NavLink></li>
                 <li><NavLink to="about" activeClassName="active_class"className="NavLink">About</NavLink> </li>
                 <li><NavLink to="contact"activeClassName="active_class"className="NavLink">Contact</NavLink></li>

             </ul>
            </div>

        </div>
        </>
    )
}
export default Navbar
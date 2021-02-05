import React from "react"
import Image from '../img/sys.webp' 
import './Home.css'
import {NavLink,Link} from 'react-router-dom'
import Common from './Common'

function About(){
    return (
        <>
       <Common name="Welcome to about page" imgsrc={Image} visit="/contact" btnName="Contact Now"/>
        </>
    )
}
export default About
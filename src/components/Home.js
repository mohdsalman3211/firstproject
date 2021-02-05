import React from "react"
import Image from '../img/gril.svg' 
import './Home.css'
import {NavLink,Link} from 'react-router-dom'

import Common from './Common'

function Home(){
    return (
        <>
               <Common
               name="Grow up Your Business With"
               imgsrc={Image}
               visit="/service"
                btnName="Get Started"/>

        </>
    )
}
export default Home
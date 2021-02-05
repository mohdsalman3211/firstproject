import React from "react"
import Image from '../img/gril.svg' 
import './Home.css'
import {NavLink,Link} from 'react-router-dom'

function Common(props){
    return (
        <>
        <div className="home_container">
             <div className="text_container">
                <div>
              <h2 className="bs_heading">
                  {props.name}<br/> 
    <strong style={{color:"#4db8ff"}}> SalmanAbraham</strong>
              </h2>
              <p >we are providing best business website,check it once!!</p>
                      <Link to={props.visit} style={{textDecoration:'none',color:"#4db8ff"}}>
                    <button className="button" >
                        {props.btnName}
                        </button>
                      </Link>  
                    </div> 
              </div> 
              <div className="img_container">
                  <img src={props.imgsrc} alt="Logo" className="image" />
                  </div> 
        </div>
        </>
    )
}
export default Common
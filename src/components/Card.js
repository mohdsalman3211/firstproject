import React from 'react'
import './Services.css'

function Card(props) {
    return (
       <>
            <div className="card">
            <div className="img_container"><img src={props.imgsrc} className="card_image"/></div> 
             <div className="title">
             <h3 >{props.title}</h3>
             <p>{props.subtitle}</p>
                 <button className="button" style={{borderRadius:"5px"}}>Go Somewhere</button>
             </div>
            </div>
        </>    
    )
}

export default Card

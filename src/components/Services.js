import React from "react"
import './Services.css'
import Img from '../img/pitza.jpg'
import Card from './Card'
import ALL_DATA from './Data'
function services(){
    return (
        <>
         <div className="service_container">
        <div className="card_container">
       {
           ALL_DATA.map((itr,index)=>{
               return<Card key={index} imgsrc={itr.imgsrc} title={itr.title} subtitle={itr.subtitle}/>
               
           })
       }
       </div>
       </div>
      

        </>
    )
}
export default services
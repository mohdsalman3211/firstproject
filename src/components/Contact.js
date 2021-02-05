import React ,{useState}from "react"
import './Contact.css'

function Contact(){
 const [data,setdata]=useState({
     fullname:'',
     email:'',
     mobile:'',
     massege:''
 })
    const InputEvent=(event)=>{
        const{name ,value}=event.target;
         console.log(value)
        setdata((preVal)=>{
            return{
                ...preVal,
                [name]:value
            }
        })
    }
    const submitform=(e)=>{
         e.preventDefault()
         alert(`my name is${data.fullname} my email id${data.email} mobile${data.mobile} i want to say that ${data.massege}`)
    }
    return (
        <>
        <div className="contant_container">
            
            <div className="heading"><h1>Contact Us</h1></div>
             <div className="form_container">
                <form onSubmit={submitform}>
                  <label>Full Name </label><input size={50} className="input" type='text' value={data.fullname} name="fullname" onChange={InputEvent} /><br/>
                  <label>Email</label> <input size={50}  className="input" type='text'value={data.email} name="email" onChange={InputEvent}/><br/>
                  <label>Mobile </label><input  size={50}className="input" type='text' value={data.mobile}name="mobile"onChange={InputEvent} /><br/>
                  <label>Massege </label><br/>
                  <textarea rows="2" cols="auto" className="input" onChange={InputEvent}name="massege" value={data.massege}/>
                <button className="button" type='submit' value="Submit" >Submit</button>
                </form>
                </div>
        </div>
        </>
    )
}
export default Contact
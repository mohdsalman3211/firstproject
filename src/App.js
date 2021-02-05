import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import React from "react"
import {Switch,Route,Redirect} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Service from './components/Services'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './components/Home.css'
function App() {
  return (
    <>
    <div className="background_img">

    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/service" component={Service}/>
      <Route path="/contact" component={Contact}/>
      <Redirect to="/"/>
    </Switch>
    </div>
    {/* <Footer/> */}
    </>
  );
}

export default App;

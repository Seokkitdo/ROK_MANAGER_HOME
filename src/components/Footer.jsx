import React, { Component } from 'react'
import { container, Table } from 'react-bootstrap';
import Router from "next/router";
import './Update.css';
import ModalExample from './ModalExample.jsx';



export default class footer extends Component {
 
  
  render() {
    return (
        <div className = "bottom_align">
        <h1 style={{color: "#ffffff", fontSize:"1.5rem",paddingTop:"20px"}}>Contact us: star940103@kakao.com</h1>
        <ModalExample buttonLabel={<img src="https://seeklogo.net/wp-content/uploads/2018/10/line-logo.png" style={{width:"90px",border:"none", textAlign:"center"}}></img>}> </ModalExample>
        </div>
    )
  }
}

import React, { useEffect } from 'react';
import "./Logo.css" ;
import axios from "axios" ;

export default function Logo() {

  // useEffect(() => {
  //   axios.get("http://localhost:5000/api").then(res => {
  //     //return res.json() ; 
  //      console.log(res.data) ; 
  //     // console.log(res.body) ; 
  //     // console.log(res.json) ; 
  //   }) 
  // } , [])

  return <div className="logoContainer">
      <a>Blogger</a>
  </div>;
};

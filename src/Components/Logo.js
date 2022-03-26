import React, { useEffect } from 'react';
import "./Logo.css" ;
import axios from "axios" ;

export default function Logo() {

  useEffect(() => {
    axios.get("http://localhost:5000/api").then(res => {
      return res.json() ; 
      // console.log(res) ; 
      // console.log(res.body) ; 
      // console.log(res.json) ; 
    }) . then((data) => {
      console.log(data) ; 

    })
  } , [])

  return <div className="logoContainer">
      <a>Blogger</a>
  </div>;
};

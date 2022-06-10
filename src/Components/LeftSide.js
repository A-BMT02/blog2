import React from 'react'
import "./LeftSide.css" ; 
import { Link } from "react-router-dom" ;

export default function LeftSide() {
  return (
    <div className='leftSide'>
        <ul>
            <li><Link to="Home">Home</Link></li>
            <li><Link to="/">Explore</Link></li>
            <li>Challlenges</li>
            <li>Goals</li>
            <li>Saved</li>
            <li>Account</li>
        </ul>
    </div>
  )
}

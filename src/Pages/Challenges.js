import React from 'react'
import { AiOutlinePlusCircle } from "react-icons/ai" ; 
import "./Challenges.css" ; 
import { Link } from "react-router-dom" ; 


export default function Challenges() {
  return (
    <div className='container challengesBox'>
        <div className='myChallenges'>
            <h2>My Challenges</h2>
            <div className='myChallenge'>
                <h3>100 Days Of Code</h3>
                <h4>Day 56</h4>
                <p><Link to="/">View Challenge</Link></p>
            </div>
            {/* <AiOutlinePlusCircle/> */}
        </div>
        <div className='joinChallenges'>
            <h2>Join Challenges</h2>
            <Link to="/Challenges/centuryofchallenge">
            <div className='joinChallenge'>
                <h3>100 Days Of Code</h3>
                <p>Consistently Code for a 100 days</p>
            </div>
            </Link>
        </div>

        <div className='customChallenges'>
            <h2>Custom Challenge</h2>
            <div className='customChallenge'>
                <h3>Create your Custom Challenge and Set Goals</h3>
            </div>
            <div className="joinCustomChallenge">
                <h3>Join Other people's custom Challenge</h3>
            </div>
        </div>
    </div>
  )
}

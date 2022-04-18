import React from 'react'
import LeftSide from '../Components/LeftSide'
import "./Explore.css" ; 
import { Link } from "react-router-dom" ; 

export default function Explore() {
  return (
    <div>
    <div className='leftSideContainer'>
        <LeftSide/>
    </div>
    <div className = "bottom">
        <p><Link to="/Home">Home</Link></p>
        <p><Link to ="/">Explore</Link></p>
        <p> <Link to="/Challenges">Challlenges</Link></p>
        <p>Goals</p>
        <p>Saved</p>
        <p>Account</p>

    </div>
    <div className='posts container'>
        <div className="MilestoneBox" >
            <h3 className='boxTitle'>Ahmad just reached a milestone 🎉</h3>
            <p>Finished my first fullStack Application</p>
            <p className='extraNotes'>"Include Notes here"</p>
        </div>

        <div className= "ChallengeBox">
            <h3 className='boxTitle'>100Days of Code Challenge</h3>
            <h2>Day 23</h2>
            <p>2 Codeforces Questions</p>
            <p>Continued Java Course on Udemy</p>
            <p>Changed layout on my website</p>
            <p className='extraNotes'>"Include Notes here"</p>
        </div>

        <div className="buggedBox">
            <h3 className='boxTitle'>Got stuck while building frontend project</h3>
            <p>Trying to get the button to be fixed at the bottom of the page</p>
            <p>Link to repo www.google.com</p>
            <p className='extraNotes'>"Include Notes here"</p>
        </div>

        {/* testing */}
        <div className="MilestoneBox" >
            <h3 className='boxTitle'>Ahmad just reached a milestone 🎉</h3>
            <p>Finished my first fullStack Application</p>
            <p className='extraNotes'>"Include Notes here"</p>
        </div>

        <div className= "ChallengeBox">
            <h3 className='boxTitle'>100Days of Code Challenge</h3>
            <h2>Day 23</h2>
            <p>2 Codeforces Questions</p>
            <p>Continued Java Course on Udemy</p>
            <p>Changed layout on my website</p>
            <p className='extraNotes'>"Include Notes here"</p>
        </div>

        <div className="buggedBox">
            <h3 className='boxTitle'>Got stuck while building frontend project</h3>
            <p>Trying to get the button to be fixed at the bottom of the page</p>
            <p>Link to repo www.google.com</p>
            <p className='extraNotes'>"Include Notes here"</p>
        </div>


    </div>

    
    
    </div>
  )
}

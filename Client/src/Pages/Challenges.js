import React, { useEffect , useState } from 'react' ;
import { AiOutlinePlusCircle } from "react-icons/ai" ; 
import "./Challenges.css" ; 
import { Link } from "react-router-dom" ; 
import { HiOutlineHome } from "react-icons/hi" ;
import { AiOutlineSearch } from "react-icons/ai" ; 
import { BiTargetLock } from "react-icons/bi" ; 
import { VscAccount } from "react-icons/vsc" ; 
import { useAuth } from '../Components/Context/UserContext';
import axios from 'axios';
import { IoMdArrowBack } from 'react-icons/io' ;


export default function Challenges() {
    const { user } = useAuth() ; 
    const [challenges , setChallenges] = useState([]) ; 

    useEffect(() => {
        axios.get('https://bugger02.herokuapp.com/api/get/challenges' , {
            headers : {   
                'auth-id' : user.id        
            }
        })
        .then(doc => {
            setChallenges(doc.data) ;  
            console.log(doc) ; 
        })
    },[])

  return (
      <div>
          <div className='top'>
            <p><Link to='/Home'><IoMdArrowBack/></Link></p>
            <p><Link to='/profile'><VscAccount/></Link></p>
          </div>

<div className="smallSide side">
        <p><Link to='/profile'><VscAccount/></Link></p>
        <p><Link to="/Home"><HiOutlineHome/></Link></p>
        <p><Link to ="/"><AiOutlineSearch/></Link></p>
        <p><Link to="/Challenges"><BiTargetLock/></Link></p>
    </div>

    <div className="bigSide side">
        <p><Link to='/profile'><VscAccount/>Profile</Link></p>
        <p><Link to="/Home"><HiOutlineHome/>Home</Link></p>
        <p><Link to ="/"><AiOutlineSearch/>Explore</Link></p>
        <p><Link to="/Challenges"><BiTargetLock/>Challenges</Link></p>
    </div>

    <div className = "bottom">
        <p><Link to="/Home"><HiOutlineHome/></Link></p>
        <p><Link to ="/"><AiOutlineSearch/></Link></p>
        <p><Link to="/Challenges"><BiTargetLock/></Link></p>
    </div>
    <div className='container challengesBox'>

         

        <div className={challenges.length !== 0 ? 'myChallenges' : 'hide'}>
            <h2>Active Challenges</h2>
            {challenges.map(challenge => (
                <div className='myChallenge'>
                    <h3>{challenge.name}</h3>
                    <h4>Day 56</h4>
                    <p><Link to="/hundredDays">View Challenge</Link></p>
                </div>
            ))}
            
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

        {/* <div className='customChallenges'>
            <h2>Custom Challenge</h2>
            <div className='customChallenge'>
                <h3>Create your Custom Challenge and Set Goals</h3>
            </div>
            <div className="joinCustomChallenge">
                <h3>Join Other people's custom Challenge</h3>
            </div>
        </div> */}
    </div>

    </div>
  )
}
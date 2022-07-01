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
import { Skeleton } from '@mui/material';


export default function Challenges() {
    const { user } = useAuth() ; 
    const [challenges , setChallenges] = useState([]) ; 
    const [member , setMember] = useState(false) ; 
    const [loading , setLoading ] = useState(true) ; 

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:5000/api/get/challenges' , {
            headers : {   
                'auth-id' : user.id        
            }
        })
        .then(doc => {
            setChallenges(doc.data) ;  
            console.log(doc) ; 
                setLoading(false) ; 
        })
    },[])

    useEffect(() => {
        if(challenges.length != 0) {
            const a = challenges.filter(challenge => {
                return challenge.name == '100 Days Of Code' ;
            })
            if(a) {
                // console.log('yes') ;
                setMember(true) ; 
            }
        }
    } ,[challenges])

  return (
    <div>
        {loading ?  
        <div className='loading'>
          <Skeleton variant="text"  height={100} />
          <div className='column'>
              <Skeleton variant="rectangular" width="100%" height={300}/>
              <Skeleton variant="rectangular" width="100%" height={300}/>
              <Skeleton variant="rectangular" width="100%" height={300}/>
          </div>
        </div>
      :  
      <div>
          <div className='top'>
            <p><Link to='/Home'><IoMdArrowBack/></Link></p>
            <p><Link to='/profile'><VscAccount/></Link></p>
          </div>

<div className="smallSide side">
        <p><Link to='/profile'><VscAccount/></Link></p>
        <p><Link to="/Home"><HiOutlineHome/></Link></p>
        <p><Link to ="/explore"><AiOutlineSearch/></Link></p>
        <p><Link to="/Challenges"><BiTargetLock/></Link></p>
    </div>

    <div className="bigSide side">
        <p><Link to='/profile'><VscAccount/>Profile</Link></p>
        <p><Link to="/Home"><HiOutlineHome/>Home</Link></p>
        <p><Link to ="/explore"><AiOutlineSearch/>Explore</Link></p>
        <p><Link to="/Challenges"><BiTargetLock/>Challenges</Link></p>
    </div>

    <div className = "bottom">
        <p><Link to="/Home"><HiOutlineHome/></Link></p>
        <p><Link to ="/explore"><AiOutlineSearch/></Link></p>
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
            <Link to={member ? "/hundredDays" : "/Challenges/centuryofchallenge"}>
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
        }
      
</div>
  )
}
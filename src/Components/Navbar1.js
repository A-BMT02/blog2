import React , { useState }from 'react'
import "./Navbar1.css" ;
import Logo from "./Logo" ; 
import { GoThreeBars } from "react-icons/go" ;
import { useAuth } from './Context/UserContext';
import Sidebar from "./Sidebar" ;
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate() ;

  const handleClose = () => {
    setClose(true) ; 
  }

  const { topbar } = useAuth() ; 
  const { logout } = useAuth() ; 

  const [ close , setClose ] = useState(true) ; 
  
  const redirect = (e) => {
    switch(e.target.value){
      case "Post" : 
        navigate("/blog") ;
        break;

      case "Read" : 
        navigate("/read") ;
        break;

      case "Log Out" :
        logoutUser() ; 
        break; 

      case "Log In" :
        navigate("/login") ; 
        break ; 

      case "About Us" : 
        navigate("/aboutus") ; 
        break ; 

        case "Get Started" : 
          navigate("/getstarted") ;
          break ;

      default : 
      console.log(e.target.value.length)
    }
  }

  const logoutUser = async () => {
    await logout() ; 
  }

  return (
    <div className="navbar1 container">
        {!close && <Sidebar setClose={setClose} handleClose={handleClose}/>  }

      <div className="logo">
        <Logo className="blogger"/>
        <div className="bars" onClick={e => setClose(false)}>
          <GoThreeBars className="barIcon"/>

        </div>
      </div>

        {/* here */}
        <div className="nav-list">
          <ul>
            {topbar.map( item => (
            <li ><a><button value={item} onClick={(e) => redirect(e)}>{item}</button></a></li>  
            ) ) }
          </ul>
        </div>

    </div>
  )
}

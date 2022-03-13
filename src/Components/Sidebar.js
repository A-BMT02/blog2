import React from 'react';
import "./Sidebar.css"; 
import {IoMdClose} from "react-icons/io" ; 
import { useNavigate } from 'react-router-dom';
import { topbar } from "./Context/DataContext" ; 
import { useAuth } from './Context/UserContext';

export default function Sidebar({handleClose}) {

  const { logout } = useAuth() ; 

  const logoutUser = async () => {
    await logout() ; 
  }

  const redirect = (e) => {
    switch(e.target.value){
      case "Post a Blog" : 
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
        break ; 

    }
  }

  

  const navigate = useNavigate() ; 

  return (
      <div className="wholeSidebar">
            <div className="cancel">
              <IoMdClose className="closeIcon" onClick={ () => handleClose(true)}/>
            </div>
            <div className="sidebarOptions">
                <ul>
                  {topbar.map(item =>(
                    <li ><a><button value={item} onClick={(e) => redirect(e)}>{item}</button></a></li>  
                  ))}
                </ul>
            </div>
        
      </div>
  )
}

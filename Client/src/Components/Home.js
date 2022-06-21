import React from 'react'
import "./Home.css" ; 
import Navbar1 from './Navbar1';
import { Search } from "./Search" ; 
import  Slider  from "./Slider" ;
import  Medium  from "./Medium" ;
import Small from "./Small" ; 
import Subscribe from "./Subscribe" ; 
import { useData } from './Context/DataContext';
import { Link } from 'react-router-dom';
import LeftSide from './LeftSide';
import { HiOutlineHome } from "react-icons/hi" ;
import { AiOutlineSearch } from "react-icons/ai" ; 
import { BiTargetLock } from "react-icons/bi" ; 
import { VscAccount } from "react-icons/vsc" ; 

export default function Home() {
 const { data } = useData() ; 
 console.log(data) ; 
  
  return (
    <div className='wholeHome'>
    
    {/* <div className='leftSideContainer'>
        <LeftSide/>
    </div> */}

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

    <div className='rightHome'>
        {/* <Navbar1/> */}
        <Search/>
        {/* <Slider/> */}
        <div className="container HomeSectionA">
            <div className='editorsPickA'>
                <div className="editorsPickAtitle">
                    <h3>Trending</h3>
                </div>

                <div className="editorsContainer">
                    <div className="lefteditor">
                        <Link to={`/page/${data[0].id}`}>
                           <Medium details={data[0]}/>
                        </Link>
                    </div>
                    <div className="righteditor">
                        { data.map( (item , index) => (
                            index!==0 && 
                        <Link to={`/page/${item.id}`}>
                            <Small details={item}/> 
                        </Link>

                        )) }
                        
                    </div>
                </div>
            </div>

            <div className='trending'>
                <div className="trendingAtitle">
                    <h3>Trending</h3>
                </div>

                <div className="trendingContainer">
                    { data.map( (item , index) => (
                        
                            index!==0 && 
                        <Link to={`/page/${item.id}`}>
                            <Small details={item}/> 
                        </Link>

                        )) }
                </div>
            </div>
        </div>
        
        <Subscribe/>
        </div>
    </div>
  )
}

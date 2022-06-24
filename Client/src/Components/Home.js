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
import {AiOutlineClose} from 'react-icons/ai' ;
import { FaRegComment } from "react-icons/fa" ;
import {AiOutlineLike} from "react-icons/ai" ; 


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

    <div className='userExplore2'>
          {/* <Search/> */}
          <div className="searchContainer">
            <div className="searchBox ">
                <input className="searchTxt" type="text" placeholder="Search..."/>
            </div>

            {/* <div className="searchIcon">
                <AiOutlineSearch className="icon" />
            </div> */}
        </div>

        <div className='userTrending2'>
            <p>Trending</p>
            <div className='post'>
              <img className="postPic" src="https://pbs.twimg.com/profile_images/1495351928800354309/o21vulIP_400x400.jpg"/>
              <div className='postContent'>
                <p className='postName'>@Deogee</p>
                <p className='postText'>After a year of my journey into web dev , i am happy to announce that i finally got a job in the tech industry. 🎉</p>
                <div className='postIcons'>
                  <AiOutlineLike/>
                  <FaRegComment/>
              </div>
            </div>
        
          </div>

          <div className='userChallenges post'>
        <p className='challengeHeader'>100DaysOfCode</p>
        <p>Day 50</p>
        <ul>
          <li>Watched a tutorial on CSS animation ✔️</li>
          <li>Changed the primary color on my website ✔️</li>
          <li>Started exploring Javascript ✔️</li>
        </ul>
        <q>Today was a productive day. I was able to complete all my goals. So exited and pumped.</q>
        <div className='postIcons'>
            <AiOutlineLike/>
            <FaRegComment/>
        </div>
      </div>

            <div className='post userBlog'>
        <p className='userBlogTitle'>How i went from HTML to fullStack developer in 6 months</p>
        <p className='blogRead'>Read...</p>
      </div>
        </div>
        </div>
    {/* <div className='rightHome'> */}
        {/* <Navbar1/> */}
        {/* <Search/> */}
        {/* <Slider/> */}
        {/* <div className="container HomeSectionA">
            <div className='editorsPickA'>
                <div className="editorsPickAtitle">
                    <h3>Trending</h3>
                </div>

                <div className="editorsContainer">
                    <div className="lefteditor">
                        <Link to={`/page/${data[0]._id}`}>
                           <Medium details={data[0]}/>
                        </Link>
                    </div>
                    <div className="righteditor">
                        { data.map( (item , index) => (
                            index!==0 && 
                        <Link to={`/page/${item._id}`}>
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
                        <Link to={`/page/${item._id}`}>
                            <Small details={item}/> 
                        </Link>

                        )) }
                </div>
            </div>
        </div>
        
        <Subscribe/>
        </div> */}
    </div>
  )
}

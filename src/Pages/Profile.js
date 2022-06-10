import React , { useEffect, useState } from 'react'
import "./Profile.css" ;
import { Link} from "react-router-dom" ;
import { HiOutlineHome } from "react-icons/hi" ;
import { AiOutlineSearch } from "react-icons/ai" ;
import { BiTargetLock } from "react-icons/bi" ;
import {AiOutlineLike} from "react-icons/ai" ; 
import { FaRegComment } from "react-icons/fa" ;
import { VscAccount } from "react-icons/vsc" 
import { Search } from '../Components/Search';
import axios from "axios" ; 
import { useAuth } from '../Components/Context/UserContext';
import EditProfile from '../Components/EditProfile';

export default function profile() {

    const { user } = useAuth() ; 
    console.log(user) ;

  const [active , setActive] = useState("posts") ;
  const [large , setLarge ] = useState(false) ; 
  const [challenges , setChallenges] = useState([]) ;
  const [edit , setEdit ] = useState(false) ; 
  const [back ,setBack] = useState(user.back) ;
  const [front , setFront] = useState(user.front) ; 

  const clicked = (e , col) => {
    // console.log(col) ; 
    setActive(col) ;
  }

  useEffect(() => {
    axios.get('http://localhost:5000/api/get/challenges/update' , {
      headers : {
        'auth-id' : user.id
      }
    })
    .then(res => {
      const challenges = res.data ; 
      setChallenges(challenges) ; 
    })
  },[])

  useEffect(() => {
    console.log(challenges) ;
  }, [challenges])

  return (

    <div className='wholeProfile'>
      <div className={edit ? '' : 'hide'}>
        <EditProfile back={back} setBack={setBack} front={front} setFront={setFront}/>
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

        <div className='backProfile'>
            <img src={back}/>
            <div className='circleProfile'>
                <img src={front}/>
            </div>
            <div className='editProfileBox'>
              <button onClick={ e => setEdit(true)} className='editProfile'>Edit Profile</button>
            </div>
            <div className='bioBox'>
              <div className='bio'>
                <p className='username'>@{user.name}</p>
                <p className='status'>{user.bio}</p>
            </div>
            </div>

            <div className='stats'>
              <div className='followers'>
                  <p className='count'>500</p>
                  <p>Followers</p>
              </div>
              <div className='following'>
                  <p className='count'>100</p>
                  <p>Following</p>
              </div>
            </div>

            <div className='contents'>
              <p onClick={e => clicked(e , 'posts')} className={active === 'posts' ? 'activeContent' : 'notActive'}>Posts</p>
              <p onClick={e => clicked(e , 'challenges')} className={active === 'challenges' ? 'activeContent' : 'notActive'}>Challenges</p>
              <p onClick={e => clicked(e , 'blogs')} className={active === 'blogs' ? 'activeContent' : 'notActive'}>Blogs</p>
              <p onClick={e => clicked(e , 'goals')} className={active === 'goals' ? 'activeContent' : 'notActive'}>Goals</p>
            </div>
       {/* Posts */}
      <div className={ active === 'posts' ? 'post' : 'post hide'}>
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

      {/* test Posts   */}
       <div className={ active === 'posts' ? 'post' : 'post hide'}>
        <img className="postPic" src="https://pbs.twimg.com/profile_images/1495351928800354309/o21vulIP_400x400.jpg"/>
        <div className='postContent'>
          <p className='postName'>@Deogee</p>
          <p className='postText'>So happy to announce that i just completed the 100DaysOfCode Challenge.</p>
          <div className='postIcons'>
            <AiOutlineLike/>
            <FaRegComment/>
        </div>
        </div>
        
      </div>
        {/* Challenges */}
        {challenges.map((challenge , day ) => (
          <div className={ active === 'challenges' ? 'userChallenges post' : 'userChallenges post hide'}>
               <p className='challengeHeader'>100DaysOfCode</p>
               <p>Day {day + 1}</p>
               <ul>
                 {challenge.goals.map(goal => (
                   <li>{goal}</li>
                 ))}
               </ul>
                <q>{challenge.note}</q>
          <div className='postIcons'>
            <AiOutlineLike/>
            <FaRegComment/>
        </div>
            </div>

        ))}
      {/* <div className={ active === 'challenges' ? 'userChallenges post' : 'userChallenges post hide'}>
        
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
      </div> */}
{/* 
      <div className={ active === 'challenges' ? 'userChallenges post' : 'userChallenges post hide'}>
        <p className='challengeHeader'>100DaysOfCode</p>
        <p>Day 51</p>
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
      </div> */}

      {/* Blogs */}
      <div className={ active === 'blogs' ? 'post userBlog' : 'post userBlog hide'}>
        <p className='userBlogTitle'>How i went from HTML to fullStack developer in 6 months</p>
        <p className='blogRead'>Read...</p>
      </div>

      {/* Goals */}
      <div className={ active === 'goals' ? 'post userGoals' : 'post userGoals hide'}>
        <div className='userGoal'>
          <p className='challengeHeader'>100DaysOfCode</p>
          <p>50 Days left</p>
        </div>
      </div>

      <div className={ active === 'goals' ? 'post userGoals' : 'post userGoals hide'}>
        <div className='userGoal'>
          <p className='challengeHeader'>Build a web application in 3 months</p>
          <p>1 month left</p>
        </div>
      </div>
            {/* <div className="MilestoneBox" >
            <div className='profileBox'>
                <img src ="https://images.pexels.com/photos/672444/pexels-photo-672444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <p>@Deogee</p>
            </div>
            <h3 className='boxTitle'>Ahmad just reached a milestone 🎉</h3>
            <p>Finished my first fullStack Application</p>
            <p className='extraNotes'>"Include Notes here"</p>
        </div> */}

        </div>

        <div className='userExplore'>
          {/* <Search/> */}
          <div className="searchContainer">
            <div className="searchBox ">
                <input className="searchTxt" type="text" placeholder="Search..."/>
            </div>

            {/* <div className="searchIcon">
                <AiOutlineSearch className="icon" />
            </div> */}
        </div>

        <div className='userTrending'>
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
        <div className = "bottom">
            <p><Link to="/Home"><HiOutlineHome/></Link></p>
            <p><Link to ="/"><AiOutlineSearch/></Link></p>
            <p><Link to="/Challenges"><BiTargetLock/></Link></p>
        </div>
    </div>
  )
}

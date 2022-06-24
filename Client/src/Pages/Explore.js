import React , { useState } from 'react'
import LeftSide from '../Components/LeftSide'
import "./Explore.css" ; 
import { Link, useNavigate } from "react-router-dom" ; 
import { HiOutlineHome } from "react-icons/hi" ;
import { AiOutlineSearch } from "react-icons/ai" ; 
import { BiTargetLock } from "react-icons/bi" ; 
import { VscAccount } from "react-icons/vsc" ; 
import {AiOutlineLike} from "react-icons/ai" ; 
import { BsPencilSquare } from "react-icons/bs" ; 
import { useData } from '../Components/Context/DataContext';
import {AiOutlineClose} from 'react-icons/ai' ;
import { FaRegComment } from "react-icons/fa" ;


export default function Explore() {
  const [ showOptions , setShowOptions ] = useState(false) ; 
  const navigate = useNavigate() ;
  const { allTweets } = useData() ;
  const { data } = useData() ; 
  const { allChallenges} = useData() ; 
  // console.log(allTweets) ; 
  console.log(allChallenges) ; 
  // console.log(data) ; 

  const changeDate = (start) => {
      const date = new Date(start) ; 
      const now = new Date() ; 
      console.log('date is ' , date , ' and now is ' , now , ' and difference is ' , date - now) ; 
      return '5' ; 
  }

  return (
    <div>
    <div className='leftSideContainer'>
        <LeftSide/>
    </div>
    <div className='top'>
        <p><Link to='/profile'><VscAccount/></Link></p>
    </div>
    <div className = "bottom">
        <p><Link to="/Home"><HiOutlineHome/></Link></p>
        <p><Link to ="/explore"><AiOutlineSearch/></Link></p>
        <p><Link to="/Challenges"><BiTargetLock/></Link></p>
    </div>
    <div className='addIcon'>
      <BsPencilSquare onClick={ e => setShowOptions(true)} />
    </div>
    <div className={showOptions ? 'options' : 'hide'}>
      <AiOutlineClose className='closeIcon' onClick={ e => setShowOptions(false)}/>
        <button onClick={ e => navigate('/blog')}>Blog</button>
        <button onClick={ e => navigate('/challenges')}>Challenge</button>
        <button onClick={ e => navigate('/post')}>post</button>
    </div>

    {/* <div className="side">
        <p><VscAccount/></p>

        <p><Link to="/Home"><HiOutlineHome/></Link></p>
        <p><Link to ="/"><AiOutlineSearch/></Link></p>
        <p><Link to="/Challenges"><BiTargetLock/></Link></p>
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

    <div className='postsAndExplore'>

    <div className='posts'>
      {allTweets.map(tweets => (
        <div className='post Hpost'>
          <img className="postPic" src="https://pbs.twimg.com/profile_images/1495351928800354309/o21vulIP_400x400.jpg"/>
          <div className='postContent'>
            <p className='postName'>@Deogee</p>
            <p className='postText'>{tweets.tweet}</p>
            <div className='postIcons'>
              <AiOutlineLike/>
              <FaRegComment/>
            </div>
        </div>
      </div>
      ))}

        {allChallenges.map(challenge=> (
          <>
          {challenge.update.map(a => (
            <div className='post Hpost'>
              <img className="postPic" src="https://pbs.twimg.com/profile_images/1495351928800354309/o21vulIP_400x400.jpg"/>
              <div className='challengeLeft'>
                <p className='postName'>@Deogee</p>
                <p className='challengeHeader'>{challenge.name}</p>
                <p>Day {a.day}</p>
                <ul>
                  {
                    a.goals.map(goal => (
                      <>
                      <li>{goal}</li>
                      </>
                    ))
                  }
                </ul>
                <q>{a.note}</q>
                <div className='postIcons'>
                    <AiOutlineLike/>
                    <FaRegComment/>
                </div>
              </div>
          </div>
          ))}
          </>
            
        ))}

        {
          data.map(blog => (
            <div className='post userBlog Hpost'>
              <img className="postPic" src="https://pbs.twimg.com/profile_images/1495351928800354309/o21vulIP_400x400.jpg"/>
              <div>
                <div>
                  <p className='postName'>@Deogee</p>
                </div>
                <Link to={`/page/${blog._id}`}>
                  <div className='blogBox'>
                    <p className='userBlogTitle'>{blog.title}</p>
                    <p className='blogRead'>Read...</p>
                  </div>
                </Link>
              </div>
        </div>
          ))
        }
      

      
        
        {/* <div className="MilestoneBox" >
            <div className='profileBox'>
                <img src ="https://images.pexels.com/photos/672444/pexels-photo-672444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <p>@Deogee</p>
            </div>
            <h3 className='boxTitle'>Ahmad just reached a milestone 🎉</h3>
            <p>Finished my first fullStack Application</p>
            <p className='extraNotes'>"Include Notes here"</p>
        </div>

        <div className= "ChallengeBox">
            <div className='profileBox'>
                <img src ="https://images.pexels.com/photos/672444/pexels-photo-672444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <p>@Deogee</p>
            </div>
            <h3 className='boxTitle'>100Days of Code Challenge</h3>
            <h2>Day 23</h2>
            <p>2 Codeforces Questions</p>
            <p>Continued Java Course on Udemy</p>
            <p>Changed layout on my website</p>
            <p className='extraNotes'>"Include Notes here"</p>
        </div>

        <div className="buggedBox">
            <div className='profileBox'>
                <img src ="https://images.pexels.com/photos/672444/pexels-photo-672444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <p>@Deogee</p>
            </div>
            <h3 className='boxTitle'>Got stuck while building frontend project</h3>
            <p>Trying to get the button to be fixed at the bottom of the page</p>
            <p>Link to repo www.google.com</p>
            <p className='extraNotes'>"Include Notes here"</p>
        </div>

        {/* testing */}
        {/* <div className="MilestoneBox" >
            <div className='profileBox'>
                <img src ="https://images.pexels.com/photos/672444/pexels-photo-672444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <p>@Deogee</p>
            </div>
            <h3 className='boxTitle'>Ahmad just reached a milestone 🎉</h3>
            <p>Finished my first fullStack Application</p>
            <p className='extraNotes'>"Include Notes here"</p>
        </div>

        <div className= "ChallengeBox">
            <div className='profileBox'>
                <img src ="https://images.pexels.com/photos/672444/pexels-photo-672444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <p>@Deogee</p>
            </div>
            <h3 className='boxTitle'>100Days of Code Challenge</h3>
            <h2>Day 23</h2>
            <p>2 Codeforces Questions</p>
            <p>Continued Java Course on Udemy</p>
            <p>Changed layout on my website</p>
            <p className='extraNotes'>"Include Notes here"</p>
        </div>

        <div className="buggedBox">
            <div className='profileBox'>
                <img src ="https://images.pexels.com/photos/672444/pexels-photo-672444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <p>@Deogee</p>
            </div>
            <h3 className='boxTitle'>Got stuck while building frontend project</h3>
            <p>Trying to get the button to be fixed at the bottom of the page</p>
            <p>Link to repo www.google.com</p>
            <p className='extraNotes'>"Include Notes here"</p>
        </div> */} 


    </div>

    {/* explore */}
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

        </div>


    
    
    </div>
  )
}

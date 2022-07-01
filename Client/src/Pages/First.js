import React from 'react'
import { Link } from 'react-router-dom';
import Home from '../Components/Home';
import Logo from '../Components/Logo'
import { useData } from '../Components/Context/DataContext';
import Small from '../Components/Small'; 
import img from "./pictures/Coding-bro.svg" ; 
import img2 from "./pictures/Problem-solving-bro.svg" ; 
import img3 from "./pictures/Team-goals-bro.svg"
import "./First.css" ; 
import Subscribe from '../Components/Subscribe';
import Slider from '../Components/Slider';
export default function First() {
 const { data } = useData() ; 

 console.log(img) ; 
  return (
    <div className='capture container'> 
        {/* <Logo/> */}
        <div className='firstHeader'>
            <Logo/> 
            <button><Link to="../Signup">Join Bugger</Link></button>
        </div>
        <div className="centerBox">
            <div className='center'>
                <div className="h2Box">
                    <h2>Document your Tech Journey.</h2>
                </div>
                <div className='h4Box'>
                    <h4><span className="bigColoured">Share</span> and <span className="bigColoured">document</span> your programming struggles and goals in <span className="bigColoured">Bugger</span></h4>    
                </div>
                <button><Link to="../Login">Explore Stories</Link></button>
            </div>

            <img className="documentImage" src={img}/>
        </div>

        <div className="centerBox">
            <img className="documentImage desktopImage" src={img2}/>
            <div className='center'>
                <div className="h2Box">
                    <h2>Join and create Challenges</h2>
                </div>
                <div className='h4Box'>
                    <h4><span className="bigColoured">Create</span> and <span className="bigColoured">Join</span> Challenges to keep you motivated to code</h4>    
                </div>
            </div>

            <img className="documentImage mobileImage" src={img2}/>

        </div>

        <div className="centerBox">
            <div className='center'>
                <div className="h2Box">
                    <h2>Set Coding Goals for yourself</h2>
                </div>
                <div className='h4Box'>
                    <h4>Set Tech<span className="bigColoured"> Goals</span> to keep you on <span className="bigColoured">track</span></h4>    
                </div>
            </div>

            <img className="documentImage" src={img3}/>

        </div>


        
    {/* <div className="trendingStories">
        <h2>Trending Stories</h2>
        { data.map( (item , index) => (
                            index!==0 && 
                        <Link to={`/page/${item.id}`}>
                            <Small details={item}/> 
                        </Link>
                        )) }
    </div>

    <div className ="buggedContainer">
<h2>Bugged</h2>
        { data.map( (item , index) => (
                            index!==0 && 
                        <Link to={`/page/${item.id}`}>
                            <Small details={item}/> 
                        </Link>
                        )) }
    </div> */}


    <Subscribe className='firstSubscribe'/>
    </div>
  )
}

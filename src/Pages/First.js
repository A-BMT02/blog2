import React from 'react'
import { Link } from 'react-router-dom';
import Home from '../Components/Home';
import Logo from '../Components/Logo'
import { useData } from '../Components/Context/DataContext';
import Small from '../Components/Small'; 


import "./First.css" ; 
import Subscribe from '../Components/Subscribe';
import Slider from '../Components/Slider';
export default function First() {
 const { data } = useData() ; 

  return (
    <div className='capture container'> 
        {/* <Logo/> */}
        <div className='firstHeader'>
            <Logo/> 
            <button><Link to="../Signup">Join Bugger</Link></button>
        </div>
        <div className="center">
            <div className="h2Box">
                <h2>Document your Tech Journey.</h2>
            </div>
            <div className='h4Box'>
                <h4><span className="bigColoured">Share</span> and <span className="bigColoured">document</span> your programming struggles and goals in <span className="bigColoured">Bugger</span></h4>    
            </div>
            <button><Link to="../Login">Explore Stories</Link></button>
        </div>


        
    <div className="trendingStories">
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
    </div>


    <Subscribe/>
    </div>
  )
}

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

export default function Home() {
 const { data } = useData() ; 
 console.log(data) ; 
  
  return (
    <>
        <Navbar1/>
        <Search/>
        <Slider/>
        <div className="container HomeSectionA">
            <div className='editorsPickA'>
                <div className="editorsPickAtitle">
                    <h3>Editor's Pick</h3>
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
    </>
  )
}

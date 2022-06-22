import React , { useEffect, useState } from 'react'
import "./page.css"; 
import { useParams , Link } from "react-router-dom" ;
import { useData } from '../Components/Context/DataContext';
import { HiOutlineHome } from "react-icons/hi" ;
import { AiOutlineSearch } from "react-icons/ai" ; 
import { BiTargetLock } from "react-icons/bi" ; 
import { VscAccount } from "react-icons/vsc" ; 
import { IoMdArrowBack } from 'react-icons/io' ;


export default function Page() {

    const [ target , setTarget] = useState({}) ; 
  const { id } = useParams() ; 
  const { data } = useData() ;
    useEffect(() => {
        data.map(item => {
            // console.log(typeof item._id , typeof id)
        if(item._id == id) {
          setTarget(item) ; 
          console.log(item) ;
        }
    })

    } , [])
  
  
  //console.log(id) ;

  return (
    <div className='wholePagePage'>
        <div className='top'>
        <p><Link to='/Home'><IoMdArrowBack/></Link></p>
        <p><Link to='/profile'><VscAccount/></Link></p>
    </div>
    <div className = "bottom">
        <p><Link to="/Home"><HiOutlineHome/></Link></p>
        <p><Link to ="/explore"><AiOutlineSearch/></Link></p>
        <p><Link to="/Challenges"><BiTargetLock/></Link></p>
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

        <div className='pagePosition'>
        <div className="readInfoHead container">
            <div className="profilePic">
                <img src='https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            </div>
            <div className='readInfo'>
                <div className='line1'>
                    <p>{target.author}</p>
                    {/* <button>Follow</button> */}
                </div>
                <div className='line2'>
                {/* <p>{target.category}</p> */}
                <p>{target.date}</p>
                </div>
            </div>
        </div>

        <div className='pageTitle container'>
            <h2>{target.title}</h2>
        </div>

        <div className={target.img === "null" ? 'hide' : 'pagePic container'}>
            {/* {target.img === "null" ? console.log('null') : console.log('not null')} */}
            <img src={target.img}/>
        </div>

        <div className="blog container">
            {target.wholeBlog}
        </div>
        </div>
    </div>
  )
}

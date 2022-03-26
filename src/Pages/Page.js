import React , { useEffect, useState } from 'react'
import "./page.css"; 
import { useParams } from "react-router-dom" ;
import { useData } from '../Components/Context/DataContext';

export default function Page() {

    const [ target , setTarget] = useState({}) ; 
  const { id } = useParams() ; 
  const { data } = useData() ;
    useEffect(() => {
        data.map(item => {
        if(item.id === id) {
          setTarget(item) ; 
        }
    })

    } , [])
  
    console.log(target) ; 
  //console.log(id) ;

  return (
    <div className='wholePagePage'>
        <div className='pagePosition'>
        <div className="readInfoHead container">
            <div className="profilePic">
                <img src='https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            </div>
            <div className='readInfo'>
                <div className='line1'>
                    <p>{target.author}</p>
                    <button>Follow</button>
                </div>
                <div className='line2'>
                <p>{target.category}</p>
                <p>{target.date}</p>
                </div>
            </div>
        </div>

        <div className='pageTitle container'>
            <h2>{target.title}</h2>
        </div>

        <div className='pagePic container'>
            <img src={target.img}/>
        </div>

        <div className="blog container">
        <h3></h3>
        
        <h3></h3>
            
        </div>
            {target.wholeBlog}
        </div>
    </div>
  )
}

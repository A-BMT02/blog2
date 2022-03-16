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
        <h3>Object Literals</h3>
        An Object Literal is one of the most popular and widely used pattern to define objects in JavaScript. It is a collection of key-value pairs. JavaScript being powerful, adds some additional functionalities to the simple objects through object literals.
        <h3>How can we use Object Literal as a replacement to Conditional Statements?</h3>
Let us consider an example scenario to understand this.
A user enters an animal, we need to return the name of its baby (what is is called).
Now, this code works exactly same as the above two codes do. But the difference is that it looks neater and has lesser conditions to check thereby reducing the load time.
I think it’s pretty nice to use this wherever possible. Any thoughts on this?
        </div>

    
        </div>
    </div>
  )
}

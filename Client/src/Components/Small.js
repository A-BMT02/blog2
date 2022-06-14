import React from 'react';
import "./Small.css" ;
import { useData } from './Context/DataContext';

export default function Small({details}) {
  const  { data }   = useData() ; 
 
  return <div className="smallCard">
      
      <div className="imageContainer">
        <img src ={details.img}></img>
      </div>

      <div className="imageDetails">
        <h3>Job Update</h3>
        <h6>So exicited to share that i got my dream job 🎉</h6>
        <p>{details.author}</p>
            {/* <h3>{details.title}</h3>
            <h6>{details.sneak}</h6>
            <h6>{details.author}<span> in </span>{details.category}</h6>
        <h6 className="date">{details.date}</h6> */}
      </div>
  </div>
}

import React from 'react';
import "./Medium.css" ;
import { useData } from "./Context/DataContext" ;


export default function MediumCard({details}) {
  const { data }   = useData() ;

  //  console.log(data[0].title);
  //  console.log(data.title);

  return <div className=" container mediumCard">
      
      <div className={details.img == 'null' ? 'hide' : "imageContainer"}>
        <img src ={details.img}></img>
      </div>

      <div className="imageDetails">
            <h3>{details.title}</h3>
            <p>{details.sneak}</p>
            <h6>{details.author}</h6>
            <h6 className="date">{details.date}</h6>
      </div>
  </div>;
}


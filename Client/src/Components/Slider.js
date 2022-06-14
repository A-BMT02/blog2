import React , { useState , useRef  } from 'react'
import { BiArrowBack } from "react-icons/bi";
import { useData } from "./Context/DataContext" ; 

export default function Slider() {

    const { editorsPick } = useData() ; 

    const [ position , setPosition ] = useState(0) ;

    const { data }  = useData() ;
    const ref = useRef([]) ; 


    const boxClicked = (index) => {
        setPosition(index) ;
}

const translate = (multiple) =>  {
 const sliderRef = ref.current ; 
  sliderRef.style.transform = `translateX(-${20 * multiple}%)` ;
}


const next = (e) => {
  
  setPosition(prev => {
    if( (prev !== (data.length - 1) ) ) {
      translate(prev + 1) 
      return (prev + 1) ;
    }
    else {
      translate(0) ; 
      return 0 ; 
    }
  })
}

const prev = (e) => {
  setPosition(previous => {
    if((previous !== 0)) 
    {
      translate(previous - 1) ;
      return (previous - 1 ) ; 

    } else {
      translate(data.length - 1) ;
      return (data.length - 1 ) ; 
    }
  })
}

    return (
<div className='sliderRelative'>
    <div className='wholeSlider container'>
        <div className=' arrow back' onClick={e => prev()}>
            <BiArrowBack />
        </div>

        <div className='mainSlider' ref={ref}>
        { editorsPick.map( (item , i) => (

            <div className="one" key={item.id}>
            <div className="sliderImg">
                <img src ={item.img} alt=""></img>
            </div>

             <div className="sliderRight">
               <h4>{item.header}</h4>
                <h3>{item.title}</h3>
                <p>{item.sneak}</p>
                <h6>{item.author}<span> in </span>{item.category}</h6>
                <h6 className="date">{item.date}</h6>
            </div>
         </div>
     ))}
        </div>

        <div className='arrow next' onClick={e => next()}>
            <BiArrowBack/>
        </div>
    </div>

    <div className="boxContainer">
        {data.map( (item , index) => (
        <div className={index === position ? "box active" : "box"} onClick={e => boxClicked(index)}></div>
    ))}
    </div>

</div>
  )
}

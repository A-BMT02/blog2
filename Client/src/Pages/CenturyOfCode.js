import React , { useState , useRef, useEffect } from 'react'
import "./CenturyOfCode.css" ;
import { IoAddCircleOutline } from "react-icons/io5" ;
import { FcCheckmark } from "react-icons/fc" ;
import axios from 'axios';
import { useAuth } from '../Components/Context/UserContext';

export default function CenturyOfCode() {
    const { user } = useAuth() ; 
    // console.log(user) ; 
    
    const ref = useRef() ;
    const [ prior , setPrior ] = useState("") ;
    const [priorList , setPriorList] = useState([])
    const [ priorNote , setPriorNote] = useState("") ;
    const addToPrior = (e) => {
        setPriorList(oldArray => [...oldArray , prior]) ;
        setPrior("") ;
    }

    const changePrior = (e) => {
        setPrior(e.target.value) ;
    }

    const startDate = (e) => {
        e.preventDefault() ;

        const config = {
            'auth-token' : user.token
        }

    axios.post("https://bugger02.herokuapp.com/api/post/100daysofcode" , {
        challengeName : "100 Days Of Code" , 
        priorSkills : priorList ,
        priorNote : priorNote ,
        goals : ["Code for a 100 days. The more consistent you are , the better"],
        startDate : new Date() , 
        user 
        } , {
            headers : config
        }).then(info => {
            console.log(info.data) ; 
        })
    
    // console.log(centuryOfCode) ;

    }
    


  return (
   <div className="center centuryBox container">
            <div className="h2Box">
                <h2>100 Days Of Code</h2>
            </div>
            <div className='h4Box'>
               <h4>Document your journey as you take on the Challenge to Code for a 100 Days</h4>
            </div>

            <div className='centuryForm'>
                <form className='form100'>
                    <label htmlFor="prior">Prior Skills</label>
                    <div className='addPrior'>
                        <input value={prior} onChange={(e) => changePrior(e) } type="text" name="prior"/>
                        <IoAddCircleOutline onClick= {e => addToPrior()}className="plusIcon"/>
                    </div>

                    <div ref={ref} className='priorSkills'>
                        {priorList.map(item => (
                            <p>{item}</p>
                        ))
                        }
                    </div>

                    <div className='priorTextarea'>
                        <textarea value={priorNote} onChange={e => setPriorNote(e.target.value)} placeholder='Describe your experience before starting this challenge'/>
                    </div>

                    <h2 className='goalsHeader'>Goals</h2>
                    <div className='goals'>
                        <FcCheckmark className="check"/>
                        <p>Code for a 100 days. The more consistent you are , the better</p>
                    </div>

                    <button onClick={ e => startDate(e)} className="startChallenge" type='submit'>Start Challenge</button>
                </form>
            </div>
        </div>
  )
}

import React from 'react'
import "./CenturyOfCode.css" ; 
import { IoAddCircleOutline } from "react-icons/io5" ; 

export default function CenturyOfCode() {
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
                        <input type="text" name="prior"/>
                        <IoAddCircleOutline className="plusIcon"/>
                    </div> 

                    <div className='priorSkills'>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JAVASCRIPT</p>
                        <p>REACT</p>
                        <p>NODE</p>
                    </div>
                    
                </form>
            </div>
        </div>
  )
}

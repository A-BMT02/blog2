import React , { useEffect, useState }from 'react'
import "./HundredDays.css" ; 
import { IoAddCircleOutline } from "react-icons/io5" ;
import axios from 'axios';
import { useAuth } from '../Components/Context/UserContext';
import { IoMdArrowBack } from 'react-icons/io' ;
import { Link } from "react-router-dom" ; 
import { Skeleton } from '@mui/material';


export default function HundredDays() {

    const { user } = useAuth() ; 
    const [ prior , setPrior ] = useState("") ;
    const [ goals , setGoals ] = useState([]) ; 
    const [ priorNote , setPriorNote] = useState("") ;
    const [day , setDay] = useState(null) ; 
    const [addUpdate , setUpdate] = useState(false)  ; 
    const [available , setAvailable] = useState(null) ; 
    const [loading , setLoading ] = useState(true) ; 
     

    // const [missing , setmissing] = useState() ; 

    const { challenge } = useAuth() ;
    // console.log(challenge[0]) ; 


// console.log('available is ' , available) ; 
// console.log('day is ', day)
   

    const changePrior = (e) => {
        setPrior(e.target.value) ;
    }

   const addToPrior = () => {
        setGoals(oldArray => [...oldArray , prior]) ;
   }

    const postUpdate = () => {

        const config = {
            'auth-id' : user.id
        }

    axios.post("https://bugger02.herokuapp.com/api/post/update/100daysofcode" , {
        goals , 
        day : available + 1 , 
        priorNote
        } ,  {
            headers : config
        }).then(info => {
            console.log(info) ; 
            setAvailable(prev => prev + 1) ;  
            
        })
    
    }
    // console.log(centuryOfCode) ;
   

   useEffect(() => {
    setLoading(true) ;
     axios.get('https://bugger02.herokuapp.com/api/get/time' , {
         headers : {
             'auth-id' : user.id
         }
     })
     .then(info => {
          const start = new Date(info.data).getTime();
          const now = new Date().getTime() ; 
          const difference = ( now - start ) / 1000; 
          const days = Math.floor(difference/ (3600*24)) ; 
        //   console.log('difference is ' , difference , ' and days is ' , days ) ;
          setDay(days) ; 
          setLoading(false) ; 
     })
   } ,[]) 

//    useEffect(() => {
//     console.log(available) ; 
//    }, [available])

   useEffect(() => {
    setLoading(true)
       if(challenge[0].update) {
            const update = challenge[0].update ; 
            setAvailable(update.length) ;
       } else {
           setAvailable(0) ; 
       }

       setLoading(false) ; 
    // let available = update.length ; 
    // console.log(day - available) ; 
    
   } , [day])
  return ( 
    <div>
        {loading ? 
        <div className='loading'>
          <Skeleton variant="text"  height={100} />
          <div className='column'>
              <Skeleton variant="rectangular" width="100%" height={300}/>
              <Skeleton variant="rectangular" width="100%" height={300}/>
              <Skeleton variant="rectangular" width="100%" height={300}/>
          </div>
        </div>
        :
<div className="centuryBox container">
        <div className='wholeHundred'> 
            <div className='top topF'>
                <p><Link to='/Challenges'><IoMdArrowBack/></Link></p>
                {/* <p><Link to='/profile'><VscAccount/></Link></p> */}
            </div>
            
        <div className="h2Box"> 
                <h2>100 Days Of Code</h2> 
            </div>
            <div className='h4Box'>
               <h4>Document your journey as you take on the Challenge to Code for a 100 Days</h4>
            </div>

            <div className='post countdown'>
                <p>{100 - day} days left</p>

            </div>

            <div className='post dayBox'>
                <p className='day'>Day {day}</p>
            </div>

            <div className={(available + 1) <= (day - 1) ? 'hide' : '' }>
                <p>Progress up to date</p>
            </div>
            {/* <div className=' post status'> 
                <p className='status1'>Status</p>
                <p>Pending update for 3 days</p>
            </div> */}

            <div className={available + 1 <= day -1 ? 'update' : 'hide'}>
                <button onClick={ e => setUpdate(true)}>Add Update</button>
            </div>
            <p className={available + 1 > day - 1 ? 'hide' : ''}>*Missing update for day {available + 1} <span className={(available + 1) === (day - 1) ? 'hide' : ''}>to day {day - 1}</span></p>

            </div>

            <div className={addUpdate && available + 1 <= day - 1 ? '' : 'hide'} >

            <form className='form100'>
            <label htmlFor="prior">What did you achieve on day {available + 1}</label>
                    <div className='addPrior'>
                        <input value={prior} onChange={(e) => changePrior(e) } type="text" name="prior"/>
                        <IoAddCircleOutline onClick= {e => addToPrior(e)}className="plusIcon"/>
                    </div>
            </form>

            <div className='achieved'>
                {goals.map(goal => (
                    <p>{goal} ✔️</p>
                ))}
            </div>

            <div className='priorTextarea'>
                <textarea value={priorNote} onChange={e => setPriorNote(e.target.value)} placeholder='Add any other thing here'/>
            </div>
            
            <div className='update'>
                <button onClick={e => postUpdate()}>Post Update</button>
            </div>

            </div>
    </div>
    }
    

    </div>
  )
}

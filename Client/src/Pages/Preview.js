import React , { useEffect, useState} from 'react'
import './preview.css' ; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { useAuth } from '../Components/Context/UserContext';

// import CloseIcon from '@mui/icons-material/Close';

export default function Preview({data}) {
    const navigate = useNavigate()  ;

    // console.log(data) ; 
    const [success , setSuccess] = useState(false) ; 
    const [finish , setFinish] = useState(false) ; 
    
    const { user } = useAuth() ; 

    console.log(user) ; 
// https://bugger02.herokuapp.com
    const publish = async () => {
         let today = new Date() ;
        axios.post("https://bugger02.herokuapp.com/api/post/blog" , {
           data 
        }).then(info => {
            console.log(info.data) ; 
            setSuccess(true) ; 
            if(finish) {
                navigate('/home') ;
            }
        })
    }

    useEffect(() => {
        if(success) {
            setTimeout(() => {
                navigate('/home')
            } , 2000)
        }
    } , [success])
   
  return (
    <div className=' wholePreview wholePagePage'>
        <div className={success ? 'success' : 'hide'}>
                <Alert onClose={ e => {
                    setSuccess(false)
                    setFinish(true) ;
                 } } severity="success">Succesfully saved blog!</Alert>
        </div>
        <div className='pagePosition'>
        <div className=" hide readInfoHead container">
            <div className="profilePic">
                <img src={data.img}/>
            </div>
            <div className='readInfo'>
                <div className='line1'>
                    <p>{data.author}</p>
                    <button>Follow</button>
                </div>
                <div className='line2'>
                <p>{data.category}</p>
                <p>{data.date}</p>
                </div>
            </div>
        </div>

        <div className='pageTitle container'>
            <h2>{data.title}</h2>
        </div>

        <div className={data.img === "null" ? 'hide' :'pagePic container'}>
            <img src={data.img}/>
        </div>

        <div className="blog container">
            {data.wholeBlog}

        </div>

        <div className={success ? 'hide' : 'publishBtn'}>
            <button  onClick={ e => publish()}>Publish</button>
        </div>
        </div>
    </div>
  )
}

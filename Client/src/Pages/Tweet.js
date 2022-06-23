import React , { useState , useEffect }  from 'react'
import './Tweet.css' ; 
import { useAuth } from '../Components/Context/UserContext';
import axios from 'axios';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io' ;
import { Link } from 'react-router-dom';

export default function Tweet() {
    const { user } = useAuth() ; 

    const [ tweet , setTweet ] = useState('') ; 
    const [success , setSuccess] = useState(false) ; 
    const [finish , setFinish] = useState(false) ;

    const navigate = useNavigate()  ;

    const handleBlogChange = (e) => {
        autoheight(e) ; 
        setTweet(e.target.value)
    }

    const autoheight = (e) => {
        e.target.style.height = `${e.target.scrollHeight}px`;
    }

    const config = {
            'auth-token' : user.token
        }
// https://bugger02.herokuapp.com
    const sendData = async () => {
        axios.post("https://bugger02.herokuapp.com/api/post/tweet" , {
            tweet , 
            date : new Date() , 
            userId : user.id
        } , {
            headers : config
        }).then(info => {
            console.log(info.data) ; 
            setSuccess(true) ; 
            if(finish) {
                navigate('/Home') ;
            }
        })
    }

    useEffect(() => {
                if(success) {
                    setTimeout(() => {
                        navigate('/Home')
                    } , 2000)
                }
            } , [success])

  return (
    <div className='wholeTweet'>
         <div className='topPost'>
            <p><Link to='/Home'><IoMdArrowBack/></Link></p>
        </div>

        <div className={success ? 'success3' : 'hide'}>
                    <Alert onClose={ e => {
                        setSuccess(false)
                        setFinish(true) ;
                    } } severity="success">Succesfully posted</Alert>
            </div>

        <div className='postTweet'>
            <button className={success ? 'hide' : ''} onClick={e => {
                sendData() ;
            }}>Post</button>
        </div>
        <div className='post'>
            <img className="postPic" src="https://pbs.twimg.com/profile_images/1495351928800354309/o21vulIP_400x400.jpg"/>
            <div className='postContent'>
            <p className='postName'>@Deogee</p>
            <textarea value={tweet} placeholder='Write something here' onChange={ e => handleBlogChange(e)}/>
            </div>
        
      </div>
    </div>
  )
}

import React , { useState }  from 'react'
import './Tweet.css' ; 
import { useAuth } from '../Components/Context/UserContext';
import axios from 'axios';

export default function Tweet() {
    const { user } = useAuth() ; 

    const [ tweet , setTweet ] = useState('') ; 

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

    const sendData = async () => {
        axios.post("https://bugger02.herokuapp.com/api/post/tweet" , {
            tweet , 
            date : new Date() , 
            id : parseInt(user.id)
        } , {
            headers : config
        }).then(info => {
            console.log(info.data) ; 
        })
    }

  return (
    <div className='wholeTweet'>
        <div className='postTweet'>
            <button onClick={e => {
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

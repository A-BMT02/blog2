import React , { useState , useEffect } from 'react'
import { useLocation , Link , useNavigate } from 'react-router-dom'
import { IoMdArrowBack } from 'react-icons/io' ;
import './newpost.css' ;
import { useAuth } from '../Components/Context/UserContext';
import axios from 'axios' ;
import { Alert } from '@mui/material';



export default function NewPost() {

    const navigate = useNavigate() ;

    const { user } = useAuth() ;

    const location = useLocation() ;
    console.log(location.state) ;

    const [reply , setReply ] = useState('') ;
    const [success , setSuccess ] = useState(false) ;
    const [finish , setFinish ] = useState(false) ;

    const tweets = location.state ;

    const sendReply = () => {
        axios.post('http://localhost:5000/api/post/reply/post' , {
            tweetId : tweets._id ,
            user ,
            reply
        }).then(res => {
            // console.log(res) ;
            setSuccess(true) ;
            if(finish) {
                        window.location.reload() ;
            }
        })
        // console.log(reply) ;
    }

    useEffect(() => {
                if(success) {
                    setTimeout(() => {
                        navigate('/home') ;
                    } , 3000)
                }
            } , [success])

  return (
    <div>
        <div className={success ? 'success2 replyAlert' : 'hide'}>
                    <Alert onClose={ e => {
                        setSuccess(false)
                        setFinish(true) ;
                    } } severity="success">Succesfully replied!</Alert>
            </div>

          <div className='top'>
            <p><Link to='/Home'><IoMdArrowBack/></Link></p>
          </div>

        <div className='posts postrep'>
        <div className='post Hpost'>
              <img className="postPic" src={tweets.front} />
              <div className='postContent'>
                <p className='postName'>@Deogee</p>
                <p className='postText'>{tweets.tweet}</p>
                {/* <div className='postIcons'>
                  <div className='likeBox'>
                  <FaHeart custom-attribute={tweets._id} onClick={e => {
                    heartClicked(e)
                  }}  className={tweets.liked.includes(`${user.id}`) ? 'like liked' : 'like'} />
                  <p>{tweets.liked.length}</p>
                    </div>

                  <FaComment onClick={ e => commentClicked(tweets)} className='comment' />
                </div> */}
              </div>
            </div>
                <textarea value={reply} onChange={e => setReply(e.target.value)} placeholder='Write reply here' className='postReply'/>
            <button className={success ? 'hide' : 'postReplyBtn'} onClick={e => sendReply()}>Reply</button>

            </div>
    </div>
  )
}

import React , { useState} from 'react'
import { useLocation , Link , useNavigate } from 'react-router-dom'
import { IoMdArrowBack } from 'react-icons/io' ;
import './PostClicked.css' ;


export default function PostClicked() {
    const navigate = useNavigate() ;
    const location = useLocation() ;

    const tweets = location.state ; 
    console.log(location.state)

    const [reply , setReply ] = useState('') ; 
    const [success , setSuccess ] = useState(false) ; 

  return (
    <div>
        <div className='top'>
            <p><Link to='/Home'><IoMdArrowBack/></Link></p>
          </div>

        <div className='posts postrep'>
        <div className='post Hpost mainPost'>
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

            {
                tweets.reply.map(r => (
                        <div className='post Hpost reply'>
              <img className="postPic" src={r.front} />
              <div className='postContent'>
                <p className='postName'>@{tweets.name}</p>
                <p className='postText'>{r.comment}</p>
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
                ))
            }

               

            {/* <div>
                <textarea value={reply} onChange={e => setReply(e.target.value)} placeholder='Write reply here' className='postReply'/>
                <button className={success ? 'hide' : 'postReplyBtn'} >Reply</button>
            
            </div> */}

            </div>
    </div>
  )
}

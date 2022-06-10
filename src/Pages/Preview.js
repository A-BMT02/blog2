import React from 'react'
import './preview.css' ; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Preview({data}) {
    const navigate = useNavigate()  ;

    // console.log(data) ; 

    const publish = async () => {
         let today = new Date() ;
        axios.post("http://localhost:5000/api/post/blog" , {
           data
        }).then(info => {
            console.log(info.data) ; 
            navigate('/home') ;
        })
    }

  return (
    <div className=' wholePreview wholePagePage'>
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

        <div className='pagePic container'>
            <img src={data.img}/>
        </div>

        <div className="blog container">
            {data.wholeBlog}

        </div>

        <div className='publishBtn'>
            <button onClick={ e => publish()}>Publish</button>
        </div>
        </div>
    </div>
  )
}

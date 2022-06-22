import  React , { useState , useRef, useEffect }  from "react" ; 
import {AiOutlinePlusCircle } from "react-icons/ai";
import  Navbar1  from "../Components/Navbar1";
import { collection , addDoc } from "firebase/firestore";
import { db } from "../Components/Context/Firebase";
import "./Post.css" ;
import { AiOutlineCamera } from "react-icons/ai" ; 
import axios from "axios";
import { useData } from "../Components/Context/DataContext";
import { findAllByDisplayValue } from "@testing-library/react";
import { Navigate, useNavigate } from 'react-router-dom';
import Preview from "./Preview";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from 'react-icons/io' ;
import { useAuth } from "../Components/Context/UserContext" ;

export function Post() {
    const navigate = useNavigate() ;

    const {data}  = useData() ; 
    const months = {
        0 : "Jan" , 
        1 : "Feb" , 
        2 : "Mar" , 
        3 : "Apr" , 
        4 : "May" , 
        5 : "Jun" , 
        6 : "Jul" , 
        7 : "Aug" , 
        8 : "Sep" , 
        9 : "Oct" ,
        10 : "Nov" , 
        11 : "Dec"
    }

    const ref = useRef(null); 
    const imgRef = useRef(null);

    const [ title , setTitle] = useState("");
    const [blog , setBlog] = useState("") ;
    const [ image , setImage ] = useState(null);
    const [ preview , setPreview] = useState();
    const [final , setFinal] = useState(false) ; 
    
    const { user } = useAuth() ; 

const autoheight = (e) => {
    e.target.style.height = `${e.target.scrollHeight}px`;
}

    const handleBlogChange = (e) => {
        autoheight(e) ; 
        setBlog(e.target.value);
    }

    const handleTitleChange = (e) => {
        autoheight(e) ; 
        setTitle(e.target.value) ;
    }


    const postBlog = async () => {
        setFinal(true) ; 
     }
        let today = new Date() ;

     const finalData = {
            img : `${preview}` ,  
            title : title, 
            sneak : `${blog.substring(0 , 250)}...` , 
            author : "Ahamad Tahir" , 
            category : "Programming"  ,
            date : `${months[today.getMonth()]} ${today.getDate()}` , 
            header : "EDITOR'S CHOICE" , 
            wholeBlog: `${blog}` , 
            editorsPick : false , 
            userId : user.id
     }


    const handleUpload = (e) => {
         console.log(e.target.files[0]);
         setImage(e.target.files[0]); 
        //console.log(imgRef.current);
         //displayImage();      
        // console.log(ref.current);
    }

    // const displayImage = () => {

    // }
    useEffect( () => {
        if(image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
                // console.log(preview);
            }
            reader.readAsDataURL(image);
        } else {
            setPreview(null);
        }

    } , [image])

    return ( <div>
        {/* <Navbar1/> */}
        <div className={final ? '' : "hide"}> 
            <Preview data={finalData}/>
        </div>
        <div className='topPost'>
            <p><Link to='/Home'><IoMdArrowBack/></Link></p>
        </div>
         
        
        <div className={ final ? 'hide' :  "wholeBlogPage container"} >
            <div className="addons container">
                {image ? <img src={preview} ref={imgRef} style={{width : "100%" , height : "100%"}}></img> : (  <div> 
                <label htmlFor="camera" >
                    <AiOutlineCamera className="camera" /> 
                </label>
                <input ref = {ref} type="file" accept="image/*" onChange={ e => handleUpload(e)} id="camera" className="none"/>
                </div>
                ) }
            </div>

            <article >
                <div className="titleContainer">
                    <textarea value={title} onChange = { e => handleTitleChange(e)} placeholder="Title" className="title">

                    </textarea>
                </div>
                

                    <textarea value={blog} onChange = { e => handleBlogChange(e)} placeholder="Write Blog here" className="blogContent" >

                    </textarea>
            </article>
        </div>

        <div className="postNav container">
            <button onClick={e => postBlog()}>Post</button>
        </div>

    </div>
    )
} 
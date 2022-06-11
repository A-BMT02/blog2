import React , { useState , useRef }from 'react'
import { GrImage } from 'react-icons/gr' ;
import axios from 'axios';
import { useAuth } from '../Components/Context/UserContext';
import { Navigate, useNavigate } from 'react-router-dom';

export default function New() {
    const [ userName , setUserName] = useState('') ; 
    const [bio , setBio ] = useState(' ') ; 
    const [back1 , setBack1] = useState('https://www.10bestdesign.com/blog/content/images/2020/04/37.png') ;
    const [front1 , setFront1 ] = useState('https://cdn.imgbin.com/25/21/20/imgbin-software-developer-computer-servers-programmer-web-developer-computer-software-others-zn1RJ2GbU813xHZYWhqV02q3A.jpg') ; 

    const ref = useRef(null); 
    const ref2 = useRef(null) ;

    const { user } = useAuth() ; 

    const navigate = useNavigate() ; 

    const handleUpload = (e) => {
        // console.log(ref.current) ; 
        ref.current.click() ;
    }

     const handleUpload2 = (e) => {
        // console.log(ref.current) ; 
        ref2.current.click() ;
    }

    const backChanged = () => {
        let reader = new FileReader();
        reader.readAsDataURL(ref.current.files[0]);

        reader.onload = function () {
            setBack1(reader.result) ; 
            // console.log(reader.result);
        }
    }

    const backChanged2 = () => {
        let reader = new FileReader();
        reader.readAsDataURL(ref2.current.files[0]);

        reader.onload = function () {
            setFront1(reader.result) ; 
            // console.log(reader.result);
        }
    }

    const saveChanges = () => {
        const data = {
            front : front1 , 
            back : back1 , 
            name : userName , 
            bio 
        }

        // console.log(data) ; 
        
        axios.put('http://localhost:5000/api/put/profile' , {
            data , 
            user
        }).then(info=> {
            // console.log(info) ;
            navigate("/home") ; 
        })
    }

  return (
    <div className='editProfiles backProfile'>
            <div className='edit1'>
                <p>New Profile</p>
            </div>
                    <img onClick={ e => handleUpload(e)} src={back1}/>
                    <input onChange={ e => backChanged()} className='editChoose' ref = {ref} type="file" accept="image/*" />
                <div className='circleProfile'>
                    <img onClick={ e => handleUpload2(e)} src={front1}/>
                    <input onChange={ e => backChanged2()} className='editChoose' ref = {ref2} type="file" accept="image/*" />
                </div>

            <div className='editForm'>
                <div>
                    <input type='text' id='a' onChange={ e => setUserName(e.target.value)} value={userName}/>
                    <label htmlFor='a'>Name</label>
                </div>
                
                <div>
                    <input onChange={ e => setBio(e.target.value)} value={bio}/>
                    <label>Bio</label>
                </div>
            </div>
        
            <div className='editSave'>
                <button onClick={ e => saveChanges()}>Save</button>
            </div>


        </div>
  )
}

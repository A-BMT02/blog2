import React , { useState , useRef }from 'react'
import './EditProfile.css' ; 
import { GrImage } from 'react-icons/gr' ;
import axios from 'axios';
import { useAuth } from './Context/UserContext';

export default function EditProfile({back , setBack , front , setFront}) {
    const [ userName , setUserName] = useState('Ahmad Tahir') ; 
    const [bio , setBio ] = useState(' I am dope as fuck boi') ; 
    const [back1 , setBack1] = useState(back) ;
    const [front1 , setFront1 ] = useState(front) ; 

    const ref = useRef(null); 
    const ref2 = useRef(null) ;

    const { user } = useAuth() ; 


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
            console.log(info) ;
        })
    }

  return (
    <div className='editProfiles backProfile'>
            <div className='edit1'>
                <p>Edit Profile</p>
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

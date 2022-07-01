import React , { useState , useRef , useEffect }from 'react'
import './EditProfile.css' ; 
import { GrImage } from 'react-icons/gr' ;
import axios from 'axios';
import { useAuth } from './Context/UserContext';
import EditPicture from './EditPicture' ; 
import { Alert } from '@mui/material';
import { useNavigate , Link } from "react-router-dom" ;
import { CircularProgress } from '@mui/material';
import { IoMdArrowBack } from 'react-icons/io' ;


export default function EditProfile({back , setBack , front , setFront , setEdit}) {
    const { user } = useAuth() ; 

    const [ userName , setUserName] = useState(user.name) ; 
    const [bio , setBio ] = useState(user.bio) ; 
    const [back1 , setBack1] = useState(back) ;
    const [front1 , setFront1 ] = useState(front) ; 
    const [ trigger , setTrigger ] = useState(false) ; 
    const [newB , setNewB] = useState('') ; 
    const [close , setClose] = useState(false) ;

    const [ trigger2 , setTrigger2 ] = useState(false) ; 
    const [close2 , setClose2] = useState(false) ;
    const [round , setRound ] = useState(false) ; 
    const [success , setSuccess] = useState(false) ; 
    const [finish , setFinish] = useState(false) ;
    const [processing , setProcessing] = useState(false) ;
    const [ hide , setHide ] = useState(false) ;
    const navigate = useNavigate() ; 
    // console.log(back1) ;

    const ref = useRef(null); 
    const ref2 = useRef(null) ;



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
            setRound(false) ; 
            setBack1(reader.result) ; 
            setClose(false) ;
            setTrigger(true) ;
            // console.log(reader.result);
        }
    }

    

    const backChanged2 = () => {
        let reader = new FileReader();
        reader.readAsDataURL(ref2.current.files[0]);

        reader.onload = function () {
            setRound(true) ;
            setFront1(reader.result) ; 
            setClose2(false) ;
            setTrigger2(true) ;
            // console.log(reader.result);
        }
    }

    const saveChanges = () => {
        setProcessing(true) ;
        const data = {
            front : front1 , 
            back : back1 , 
            name : userName , 
            bio 
        }

        // console.log(data) ; 
        
        axios.put('https://bugger02.herokuapp.com/api/put/profile' , {
            data , 
            user
        }).then(info=> {
            console.log(info) ;
            setSuccess(true) ; 
            setProcessing(false) ; 
            if(finish) {
                        window.location.reload() ;
            }
        })
    }

    const newBack = (a) => {
        setNewB(a) ; 
    }
    
    useEffect(() => {
                if(success) {
                    setTimeout(() => {
                        window.location.reload() ;
                    } , 3000)
                }
            } , [success])

            // useEffect(() => {
            //     console.log(trigger , trigger2) ; 
            // }, [ trigger , trigger2])

  return (
      <div>
        <div className='top topF'>
            <p onClick={ e => {
                // setHide(true) ;
                setEdit(false); 
            }}><IoMdArrowBack/></p>
            {/* <p><Link to='/profile'><VscAccount/></Link></p> */}
          </div>
        {trigger && <EditPicture round={round} setBack1={setBack1} close={close} setClose={setClose} setTrigger={setTrigger} back={back1}/>}
        {trigger2 && <EditPicture round={round} setBack1={setFront1} close={close2} setClose={setClose2} setTrigger={setTrigger2}  back={front1}/>}


 <div className={success ? 'success2' : 'hide'}>
                    <Alert onClose={ e => {
                        setSuccess(false)
                        setFinish(true) ;
                    } } severity="success">Succesfully updated Profile!</Alert>
            </div>

    <div className={trigger || trigger2? 'hide' : 'editProfiles backProfile'}>

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
                {processing ? <CircularProgress color="success" /> : 
                    <button className={success ? 'hide' : ''} onClick={ e => saveChanges()}>Save</button>
                }
            </div>


        </div>
        </div>
  )
}

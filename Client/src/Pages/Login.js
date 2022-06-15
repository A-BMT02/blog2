import React , { useRef , useState} from 'react'
import Logo from '../Components/Logo';
import "./Login.css" ; 
import { Link , useNavigate } from "react-router-dom" ; 
import { useAuth } from '../Components/Context/UserContext';
export default function Login() {

    const emailRef = useRef(null) ; 
    const passwordRef = useRef(null) ;
    // const { user } = useAuth() ; 
    const [email , setEmail] = useState("") ; 
    const [ password , setPassword ] = useState("") ;
    const [ error , setError ] = useState("") ;
    const [ errorAnimate , setErrorAnimate] = useState(false) ;  
   
    const { login }   = useAuth() ; 

    const navigate = useNavigate() ; 


    const errorRef = useRef("") ; 

    const emailFocus = () => {
        const email = emailRef.current ; 
        email.style.top = "-60%" ; 
        email.style.color = "white" ; 
        resetError() ;
    }

    const passwordFocus = () => {
        const password = passwordRef.current ;
        password.style.top = "-60%" ; 
        password.style.color = "white" ; 
        resetError()
    }

    const emailBlur = (e) => {
        const email = emailRef.current ; 
        if(!e.target.value ) {
        email.style.top ="20%" ;   
        email.style.color = "grey" ; 

        } else {
            email.style.top = "-60%" ;
            email.style.color = "white" ; 

        }
    }

    const passwordBlur =(e) => {
        const password = passwordRef.current ; 
        if(!e.target.value ) {
        password.style.top ="20%" ;  
        password.style.color = "grey" ; 

        } else {
            password.style.top = "-60%" ; 
            password.style.color = "white" ; 
        }
    }

    const loginUser = async (e) => {
        e.preventDefault() ;
        if(!error) {
            setErrorAnimate(false) ;
        }
        try {
            const res = await login(email , password) ;
            if(res.access) {
                // console.log(res.data) ; 
                setError("") ;
                setErrorAnimate(false) ; 
                if(res.data.back && res.data.front && res.data.bio && res.data.name) {
                    navigate("/home") ; 
                } else {
                    console.log('here') ; 
                    navigate("/new") ; 
                }
            } else {
                // console.log('error' , res.data) ;
                throw res.data
            }
            
        } catch(err) {
            const errMsg = err.error ;
            // console.log('error in catch' , errMsg) ;
            setError(errMsg) ; 
            setErrorAnimate(true) ;
        }
    }

    const resetError = () => {
        setError("") ; 
        setErrorAnimate(false)
    }

    // useEffect(() => {
    //     if(user) {
    //         navigate("/") ; 
    //     } 
    // } , [user]) 

  return (
    <div className='wholeLogin'>
        <div ref={errorRef} className={errorAnimate ? "errorAnimate" : "removeErrorAnimate"}>
            <h2>{error}</h2>
        </div>

        <form className="loginContainer"  autoComplete="off" onSubmit={e => loginUser(e)}>
            <div className="loginLogo">
                <Logo className="logo"/>
            </div>

            <div className="inputContainer">
                <div className="emailContainer">
                    <div ref={emailRef} className="emailText" >
                        <p>Email</p>
                    </div>

                    <div className="email">
                        <input type="text" onFocus={e => emailFocus()} onBlur={e => emailBlur(e)} onChange={e => setEmail(e.target.value)}/>
                    </div>
                </div>

                <div className="passwordContainer">
                    <div ref={passwordRef} className="passwordText" >
                        <p>Password</p>
                    </div>
                    <div className="password">
                        <input type="password" onFocus={e => passwordFocus()} onBlur={e => passwordBlur(e)} onChange={e => setPassword(e.target.value)}/>
                    </div>
                </div>
            </div>

            <div className="loginBtnContainer">
                <button type="submit">LOGIN</button>
            </div>

            <div className="dontHave">
                <p>Don't have an account ? <Link to="/signup">Sign up</Link></p>
            </div>
        </form>
    </div>
  )
}

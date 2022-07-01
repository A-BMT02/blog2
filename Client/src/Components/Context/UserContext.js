import React , { createContext , useState , useEffect , useContext  } from "react" ; 
import { auth } from "./Firebase" ; 
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import { useData } from "./DataContext";
import axios from "axios";
import { Skeleton } from '@mui/material';


export const UserContext = createContext() ; 

export function useAuth() {
  return useContext(UserContext);
}

export const UserProvider = props => {
  const { topbar } = useData() ;
  const [ user , setUser] = useState(null) ; 
  const [ loading , setLoading] = useState(true) ;
  const [ challenge , setChallenge ] = useState([]) ; 
    
  const login = async (email , password) => {
    try {
      const res = await axios.post("https://bugger02.herokuapp.com/api/user/login" , {
      email , 
      password 
    }) ; 
    if(res.status == 200) {  
      console.log('res.data is ' , res.data) ; 
      localStorage.setItem("token", res.data.token);
      
      setUser(res.data) ;
      return {access : true ,  data : res.data }  ; 
    }
    } catch(err) {
      // console.log(err.response.data) ;
      return {access : false , data : err.response.data}
    }
    
  //return signInWithEmailAndPassword(auth , email , password) ;
  }

  const logout = () => {
    return signOut(auth) ; 
  }

  const signup = async (email , password) => {
    try {
      const res = await axios.post("https://bugger02.herokuapp.com/api/user/register" , {
      email , 
      password
    }) ; 

    if(res.status == 200) {
      console.log(res) ; 
      return {access : true , data : res.data.user} ;
    } 
    } catch(err) {
      return {access : false , data : err.response.data.error}
      // console.log(err.response.data.error) ; 
      // console.log(res);
    }

  }

useEffect(() => {
  // setLoading(true) ; 
  const token = localStorage.getItem('token') ;
            if(token) {
              console.log(token) ; 
              
            findUser(token)
            } else {
              setLoading(false)
            }
            //  setLoading(false) ; 

} , [])

  useEffect(() => {
       console.log("new user is " , user) ; 
        setLoading(true) ; 
        
      if(user) {
        console.log(user.id) ;
        axios.get('https://bugger02.herokuapp.com/api/get/challenges' , {
            headers : {   
                'auth-id' : user.id        
            }
        })
        .then(doc => {
            console.log(doc.data) ; 
            setChallenge(doc.data) ; 
            if(user != null) {
              setLoading(false) ; 
            }
        })
      } else {
        // setUser({})
        // setLoading(true)
      }
  
} , [user])



  const findUser = async (token) => {
    // let a = {}
    const { data } = await axios.post('https://bugger02.herokuapp.com/api/post/finduser' , {token}) ;
  // axios.post('http://localhost:5000/finduser' , {
  //   token
  // })
  // .then(info => {
  //    setUser(info.data) ;
  // })
    setUser(data) ;
  // console.log(a)
}



  const value = {
    user , 
    login , 
    logout , 
    signup , 
    topbar , 
    loading , 
    challenge
  }
    return (
        <UserContext.Provider value={ value }>
            {loading ?  
        <div className='loading'>
          <Skeleton variant="text"  height={100} />
          <div className='column'>
              <Skeleton variant="rectangular" width="100%" height={300}/>
              <Skeleton variant="rectangular" width="100%" height={300}/>
              <Skeleton variant="rectangular" width="100%" height={300}/>
          </div>
        </div>
      :  
      props.children
        }
        </UserContext.Provider>
    )
} ; 
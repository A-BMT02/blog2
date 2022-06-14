import React , { createContext , useState , useEffect , useContext  } from "react" ; 
import { auth } from "./Firebase" ; 
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import { useData } from "./DataContext";
import axios from "axios";

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
      const res = await axios.post("http://localhost:5000/api/user/login" , {
      email , 
      password
    }) ; 
    if(res.status == 200) {  
      console.log('res.data is ' , res.data) ; 
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
      const res = await axios.post("http://localhost:5000/api/user/register" , {
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
      // console.log("new user is " , user) ; 
      if(user) {
        setLoading(true) ; 
        axios.get('http://localhost:5000/api/get/challenges' , {
            headers : {   
                'auth-id' : user.id        
            }
        })
        .then(doc => {
            console.log(doc.data) ; 
            setChallenge(doc.data) ; 
            setLoading(false) ; 
        })
      }
  
} , [user])



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
            {props.children}
        </UserContext.Provider>
    )
} ; 
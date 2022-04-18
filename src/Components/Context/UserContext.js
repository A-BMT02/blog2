import React , { createContext , useState , useEffect , useContext  } from "react" ; 
import { auth } from "./Firebase" ; 
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import { useData } from "./DataContext";

export const UserContext = createContext() ; 

export function useAuth() {
  return useContext(UserContext);
}

export const UserProvider = props => {
  const { topbar } = useData() ;
  const [ user , setUser] = useState({}) ; 
  const [ loading , setLoading] = useState(true) ;
    
  const login = (email , password) => {
   return signInWithEmailAndPassword(auth , email , password) ;
  }

  const logout = () => {
    return signOut(auth) ; 
  }

  const signup = (email , password) => {
    return createUserWithEmailAndPassword(auth , email , password) ; 
  }
  useEffect(() => {
      const unsubscribe = onAuthStateChanged( auth , user => {
      setLoading(true) ;
         topbar.length = 0  ; 
      if(user) {
         setUser(user) ;
         topbar.push("Home")  ;
         topbar.push("Post")
         topbar.push("Log Out") ;
      } else {
        setUser(null) ;
        topbar.push("About Us")  ;
        topbar.push("Get Started")
        topbar.push("Log In") ;
      }

    setLoading(false) ;
    })

    return () => { unsubscribe() } ;

  } , [] )

  const value = {
    user , 
    login , 
    logout , 
    signup , 
    topbar , 
    loading
  }
    return (
        <UserContext.Provider value={ value }>
            {props.children}
        </UserContext.Provider>
    )
} ; 
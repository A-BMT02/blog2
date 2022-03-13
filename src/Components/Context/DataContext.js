import React , { useContext , useState ,  createContext, useEffect } from 'react'
import { getDocs, collection } from "firebase/firestore";
import { db } from './Firebase';

export const dataContext = createContext() ; 

export const useData = () => {
    return useContext(dataContext) ; 
}

export const topbar = ["About Us" , "Log In" , "Get Started"] ;

export const DataContextProvider = (props) => {

  const [ loading , setLoading] = useState(true) ;
  const [data , setData] = useState([]) ;
  const [editorsPick , setEditorsPick]  = useState([]);

  useEffect(() => {
    setLoading(true);
  let blogs = [];
    const colRef = collection(db , 'blogs');
    getDocs(colRef).then(snapshot => {
    snapshot.docs.forEach(doc => {
     blogs.push({
       ...
       doc.data() , 
      id : doc.id})
   })
   blogs.forEach(item => {
    
     if(item.editorsPick) {
      setEditorsPick ( prev => [item , ...prev ] );
      ///console.log(...editorsPick) ;
    }
   })
    
    setData(blogs);

setLoading(false);
}).catch(e => {
  console.log(e); 
})
 
 

  } , [])
  
  return (
    <dataContext.Provider value={{data , topbar , editorsPick }}>
        {!loading && props.children}
    </dataContext.Provider>
  )
}
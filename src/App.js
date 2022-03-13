import './App.css';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom" ;
import { Post } from './Pages/Post';

import { DataContextProvider } from "./Components/Context/DataContext" ; 
import Home from "./Components/Home" ; 
import Login  from './Pages/Login'; 
import { UserProvider } from './Components/Context/UserContext';
import { Signup } from './Pages/Signup';
function App() {
  return (
    <DataContextProvider>
      <UserProvider>
      <Router>
        <div className="App">
          <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<><Login/></>} />
                <Route path="signup" element={<><Signup/></>}/>
                <Route path="/blog" element={<><Post/></>}/>
                <Route path="/read" element={<p>Under Construction</p>}/>
                <Route path="*" element={<p>Under Construction</p>}/>
          </Routes>
        </div>
      </Router>
      </UserProvider>
    </DataContextProvider>

  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom" ;
import { Post } from './Pages/Post';

import { DataContextProvider } from "./Components/Context/DataContext" ; 
import Home from "./Components/Home" ; 
import Login  from './Pages/Login'; 
import { UserProvider } from './Components/Context/UserContext';
import { Signup } from './Pages/Signup';
import Page from './Pages/Page';
import First from './Pages/First';
import Explore from "./Pages/Explore" ; 
import Challenges from './Pages/Challenges';
import CenturyOfCode from './Pages/CenturyOfCode';
function App() {
  return (
    <DataContextProvider>
      <UserProvider>
      <Router basename="/blog2">
        <div className="App">
          <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/login" element={<><Login/></>} />
                <Route path="signup" element={<><Signup/></>}/>
                <Route path="/blog" element={<><Post/></>}/>
                <Route path="/read" element={<p>Under Construction</p>}/>
                <Route path="/first" element={<First/>}/>
                <Route path="/Home" element={<Explore/>}/>
                <Route path="page/:id" element={<Page/>}/>
                <Route path="/Challenges" element={<Challenges/>}/>
                <Route path="/Challenges/centuryofchallenge" element={<CenturyOfCode/>}/>
          </Routes>
        </div>
      </Router>
      </UserProvider>
    </DataContextProvider>

  );
}

export default App;

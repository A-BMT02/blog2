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
import Profile from './Pages/Profile';
import HundredDays from './Pages/HundredDays';
import Preview from './Pages/Preview';
import Tweet from './Pages/Tweet';
import EditProfile from './Components/EditProfile';
import New from './Pages/New';
import NewPost from './Pages/NewPost';
import PostClicked from './Pages/PostClicked';

function App() {
  return (
    <DataContextProvider>
      <UserProvider>
      <Router>
        <div className="App">
          <Routes>
                <Route exact path="/" element={<First/>}/>
                <Route path="/login" element={<><Login/></>} />
                <Route path="signup" element={<><Signup/></>}/>
                <Route path="/blog" element={<><Post/></>}/>
                <Route path="/read" element={<p>Under Construction</p>}/>
                {/* <Route path="/first" element={<First/>}/> */}
                <Route path="/Home" element={<Explore/>}/>
                <Route path="/explore" element={<Home/>}/>
                <Route path="page/:id" element={<Page/>}/>
                <Route path="/Challenges" element={<Challenges/>}/>
                <Route path="/Challenges/centuryofchallenge" element={<CenturyOfCode/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/hundredDays" element={<HundredDays/>}/>
                <Route path="/preview" element={<Preview/>}/>
                <Route path="/post" element={<Tweet/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/write/post" element={<NewPost/>}/>
                <Route path="/:name/posts/:id" element={<PostClicked/>}/>
                
                {/* <Route path="/edit" element={<EditProfile/>}/> */}

          </Routes>
        </div>
      </Router>
      </UserProvider>
    </DataContextProvider>

  );
}

export default App;
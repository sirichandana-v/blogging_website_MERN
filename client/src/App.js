import { 
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import { useState } from 'react';
import SlideDrawer from './components/SlideDrawer/SlideDrawer';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Blog from "./components/Blog/Blog"
import Posts from './components/Post/Posts';
import Theme from './components/Theme/Theme';
import { CreatePost } from './components/CreatePost/CreatePost';

function App() {

  const [openDrawer, setopenDrawer] = useState(false);
  const onClickDrawer=()=>{
    setopenDrawer((prev)=>!prev);
  };
  const [blogName, setblogName]=useState("my blog");
  
  return (
    <div className="App">
     <Router>  
      <Navbar onClickDrawer={onClickDrawer}/>
      <SlideDrawer openDrawer={openDrawer}/>
        <Routes> 
          <Route exact path='/' element={<Posts title={blogName}/>}/>
          <Route exact path='/blog' element={<Blog/>}/>
          <Route exact path='/themes' element={<Theme/>}/>
          <Route exact path='/createpost' element={<CreatePost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import HomePage from "./componnts/HomePage";
import Login from "./componnts/Login";
import Register from "./componnts/Register";
import Settings from "./componnts/Settings";
import SinglePage from "./componnts/SinglePage";
import TopBar from "./componnts/TopBar";
import Write from "./componnts/Write";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import SinglePost from "./componnts/SinglePost";



function App() {
  const user =false;
  return (
     <Router>
      <TopBar />
      <Routes>
      <Route exact path="/" element={<HomePage />} /> 
      <Route path="/register" element={user ? <HomePage/> : <Register />} /> 
      <Route path="/login" element={ user ?<HomePage/>: <Login />} /> 
      <Route path="/write" element={user ? <Write />:<Register/>} /> 
      <Route path="/setting" element={user ? <Settings />:<Register/>} /> 
      <Route path="/singlePost" element={<SinglePost/>} /> 
      <Route path="/post/:postId" element={<SinglePage />} /> 
      </Routes>
    </Router>
  );
}

export default App;

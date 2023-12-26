import react, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UrlcontextProvider from "./contexts/Urlcontext";
import PostsTable from "./components/PostsTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPost from "./components/AddPost";
import PostDetail from "./components/PostDetail";
import EditPost from "./components/EditPost";
function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/posts?limit=10')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data)
      });
  }, []);
 

  return (
    <>
    {/* <UrlcontextProvider>
    
    </UrlcontextProvider> */}
      
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PostsTable posts = {posts} />}/>
      <Route path="/addpost" element={<AddPost />}/>
      <Route path="/postdetail/:id" element={<PostDetail />}/>
      <Route path="/editpost/:id" element={<EditPost />}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;

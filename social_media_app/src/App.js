// import About from './About';
// import Footer from './Footer';
// import Header from './Header';
// import Home from './Home';
// import Missing from './Missing';
// import Nav from './Nav';
// import NewPost from './NewPost';
// import Post from './Post';
// import PostLayout from './PostLayout';
// import PostPage from './PostPage';

// import { Routes, Route, Link } from "react-router";

// function App() {
//   return (
//     <div className="App">

//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/postpage">Post Page</Link></li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/newpost" element={<NewPost/>} />
//         <Route path="/postpage" element={<PostPage/>} />
//         <Route path="/postpage/:id" element={<Post/>} />
//         <Route path="/postpage/newpost" element={<NewPost/>} />
//         <Route path="*" element={<Missing/>} />
//       </Routes>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/newpost" element={<NewPost/>} />
//         <Route path="/postpage" element={<PostLayout/>}>
//           <Route index element={<PostPage/>} />
//           <Route path=":id" element={<Post/>} />
//           <Route path="newpost" element={<NewPost/>} />
//         </Route>
//         <Route path="*" element={<Missing/>} />
//       </Routes>

//       <Header/>
//       <Nav/>
//       <Home/>
//       <NewPost/>
//       <PostPage/>
//       <About/>
//       <Missing/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import { Routes, Route, useNavigate} from "react-router";
import { format } from "date-fns";

function App() {
  const [posts, setPosts] = useState([
  {
    id: 1,
    title: "Morning Motivation",
    datetime: "April 18, 2026 07:30:00 AM",
    body: "Start your day with positive energy and a clear goal in mind. Every small step counts!",
  },
  {
    id: 2,
    title: "Tech Update",
    datetime: "April 18, 2026 10:15:00 AM",
    body: "Exploring the latest trends in AI and machine learning. The future is exciting!",
  },
  {
    id: 3,
    title: "Travel Diaries",
    datetime: "April 17, 2026 06:45:00 PM",
    body: "Captured a beautiful sunset at the beach today. Nature never fails to amaze.",
  },
  {
    id: 4,
    title: "Fitness Goals",
    datetime: "April 17, 2026 06:20:00 AM",
    body: "Completed a 5km run today! Consistency is the key to success.",
  },
  {
    id: 5,
    title: "Food Love",
    datetime: "April 16, 2026 01:00:00 PM",
    body: "Tried a new pasta recipe today. It turned out delicious!",
  }
]);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postBody, setPostBody] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const navigate=useNavigate();

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase()),
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length? posts[posts.length - 1].id + 1 : 1;
     const datetime = format(new Date(), "MMMM d, yyyy hh:mm:ss a");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle("");
    setPostBody("");
    navigate("/");
  };
  const handleDelete=(id)=>{
    const newPost=posts.filter(post=>post.id!==id);
    setPosts(newPost);
    navigate("/");
  }
  return (
    <div className="App">
      <Header title="Codex Social Media" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={searchResults} />} />
        <Route path="/post">
          <Route index element={
            <NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />  
          }/>
          <Route path=":id" element={<PostPage posts={posts} handleDelete={handleDelete}/>}/>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreatePost from "./Components/CreatePost";
import Post from "./Components/Post";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes> 
    </>
  );
}

export default App;

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import About from "./pages/About";
import Post from "./pages/Post";
import Posts from "./pages/Posts";

function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Layout />}>
          <Route index element={<Posts />} />
          <Route path='/post/:post_id' element={<Post />} />
          <Route path='/about' element={<About />} />
        </Route>
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

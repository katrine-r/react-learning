import About from "./pages/About";
import Post from "./pages/Post";
import Posts from "./pages/Posts";

export const routes = [
  { path: "/", element: <Posts />, isPrivate: true },
  { path: "/post/:post_id", element: <Post />, isPrivate: true },
  { path: "/about", element: <About />, isPrivate: true }
];

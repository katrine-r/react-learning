import About from "./pages/About";
import Counter from "./pages/Counter";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import Weather from "./pages/Weather";

export const routes = [
  { path: "/", element: <Posts />, isPrivate: true },
  { path: "/post/:post_id", element: <Post />, isPrivate: true },
  { path: "/about", element: <About />, isPrivate: true },
  { path: "/counter", element: <Counter />, isPrivate: true },
  { path: "/weather", element: <Weather />, isPrivate: true }
];

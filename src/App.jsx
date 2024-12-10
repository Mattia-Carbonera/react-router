import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import MyPosts from "./components/MyPosts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={HomePage}></Route>
        <Route path="/about" Component={AboutUs}></Route>
        <Route path="/posts" Component={MyPosts}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

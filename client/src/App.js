import Header from "./Header";
import Post from "./Post";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import './App.css';
import { Route, Routes } from "react-router-dom";
function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage/>} />
        <Route path={"/login"} element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage />} />
         {/*  <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} /> */}
      </Route>
    </Routes>
  );
}

export default App;

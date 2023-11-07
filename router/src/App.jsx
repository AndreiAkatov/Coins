import './App.css';
import { Routes, Route } from "react-router-dom";
import NotFoundPage from './pages/NotFoudPage/NotFoundPage';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import Layout from './Layout/Layout';
import Post from './pages/Post/Post';

function App() {
   return (
      <>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route index element={<Home />}></Route>
               <Route path='about' element={<About />}></Route>
               <Route path='posts' element={<Blog />}></Route>
               <Route path='posts/:id' element={<Post />}></Route>
               <Route path='*' element={<NotFoundPage />}></Route>
            </Route>
         </Routes>
      </>
   );
}

export default App;

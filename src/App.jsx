import './app.css'
import { Routes, Route } from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import CoinInfo from './pages/CoinInfo/CoinInfo'
import HomePage from './pages/HomePage/HomePage'
import Layout from "./components/Layout";

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<HomePage />}  ></Route>
               <Route path="/info" element={<CoinInfo />}></Route>
               <Route path="*" element={<NotFoundPage />}> </Route>
            </Route>
         </Routes>
      </>
   );
}
export default App;

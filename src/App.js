import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/home/Home.jsx';
import Product from './Components/product/Product.jsx';
import Layout from './Components/layout/Layout';
import LoginPage from './Components/loginPage/LoginPage.jsx';
import SignUp from './Components/signup/SignUp.jsx';
function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/product' element={<Product />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Layout>
  );
}

export default App;
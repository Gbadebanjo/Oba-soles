import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/home/Home.jsx';
import Product from './Components/product/Product.jsx';
import Layout from './Components/layout/Layout';
import LoginPage from './Components/loginPage/LoginPage.jsx';
import Register from './Components/register/Register.jsx';
import Admin from './Components/admin/Admin.jsx';
import axios from 'axios';
import UserContext from './Components/Context/UserContext.jsx';
import React from 'react';
import ProductDetails from './Components/product/ProductDetails.jsx';

axios.defaults.baseURL = 'http://localhost:4000';
function App() {
  const [name, setName] = React.useState(""); //State is created to manage the name of the user Context that is logged in
  return (
    <UserContext.Provider value={{ name, setName }}> {/* Provide the context */}
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin' element={<Admin />} />

        </Routes>
      </Layout>
    </UserContext.Provider>

  );
}

export default App;
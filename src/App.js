import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/home/Home.jsx';
import Product from './Components/product/Product.jsx';
import Layout from './Components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </Layout>
  );
}

export default App;
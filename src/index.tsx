import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Managements from './pages/Managements';
import Bills from './pages/Bills';
import ConfirmPayment from './pages/ConfirmPayment';
import AddProduct from './pages/AddProduct';
import ProductSold from './pages/ProductSold';
import ProductPromo from './pages/ProductPromo';
import MyOrders from './pages/MyOrders';
import ManagementConfirmPyment from './pages/ManagementConfirmPayment';
import ManagementProductSend from './pages/ManagementProductSend';
import HistoryTx from './pages/HistoryTx';
import ProductCategory from './pages/ProductCategory';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/detail/:productId" element={<Product />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/confirm-payment/:orderId" element={<ConfirmPayment />} />
        <Route path="/history-transaction" element={<HistoryTx />} />
        <Route path="/product/:categoryId" element={<ProductCategory />} />

        <Route path="/management/confirm-payment" element={<ManagementConfirmPyment />} />
        <Route path="/management/product-send" element={<ManagementProductSend /> } />
        <Route path="/management/shop" element={<Managements />} />
        <Route path="/management/shop/add-product" element={<AddProduct />} />
        <Route path="/management/shop/product-sold" element={<ProductSold />} />
        <Route path="/management/shop/product-promo" element={<ProductPromo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

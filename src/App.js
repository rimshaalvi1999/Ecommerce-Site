import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Admin from './components/Admin/Admin';
import Products from './components/Products/Products';
import Product_Items from './components/Product_Items/Product_Items';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import AddressForm from './components/AddressForm/AddressForm';
import {useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { fetchProducts } from './store/actions/dataAction';
function App() {
// let dispatch=useDispatch();
// let data=useSelector(state=>state.data.products);
// console.log(data);
// function showproducts(){
//   dispatch(fetchProducts());
// }

// useEffect(() => {
//   showproducts();
// }, [])



  return (
    <div id='body'>
   <BrowserRouter>
      <Header/>
        <div className='main'>
         <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/Signup' element={<Signup/>} />
           <Route path='/Login' element={<Login/>} />
           <Route path='/Admin' element={<Admin/>}/>
           <Route path='/Dashboard' element={<Dashboard/>} />
           <Route path='/Checkout' element={<Checkout/>} />
           <Route path='/AddressForm' element={<AddressForm/>} />
           <Route path='/Products' element={<Products/>} />
           <Route path='/Products/:productKey' element={<Product_Items/>} />
           <Route path='/Cart' element={<Cart/>} />
         </Routes>
        </div>
         <Footer/>
        </BrowserRouter>
   


    </div>
  );
}

export default App;

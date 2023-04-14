import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Shoes from '../../Shoes.json';
import './Cart.css';
import { checkoutProduct } from '../../store/actions/dataAction';
export default function Cart() {
  let cartitems = useSelector(state => state.data.cart);
  console.log(cartitems);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  // let cartitem = localStorage.getItem('productkey');
  // let cartitem = JSON.parse(localStorage.getItem("productKey"))
  // console.log(cartitem);
  // console.log(shoe);
  if (!cartitems)
    <h2>cart is empty</h2>
  return (
    <div>
      <table>
        {
          cartitems.map((item) => {
            let shoe = Shoes[item];
            console.log(shoe);
            return <tr>
              <div>
              <tr style={{ fontSize: '20px', fontFamily: 'times-new-roman' }}>
                  <td>Shoe Name</td>
                  <td >Shoe Price</td>
                  <td >Shoe Category</td>
                  <td >Shoe Gender</td>
                  <td >Shoe Brand</td>
                  
                </tr>
               <td>{shoe.name}</td>
              <td>{shoe.price}</td>
              <td>{shoe.category}</td>
              <td>{shoe.gender}</td>
              <td>{shoe.brand}</td> 
              <td> <button onClick={() => {
                dispatch(checkoutProduct(item))
                navigate('/Checkout')
              }}>Chect Out</button></td>
             
              </div>
            </tr>
          }
          )
        }
      </table>

    </div>
  )
}


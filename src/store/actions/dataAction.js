import axios from "axios";
export const createSession = (payload) => async (dispatch) => {
  try {
   dispatch({
    type:"ADD_USER",
    payload,
   })
  } catch (err) {
    console.log("error " + err);
    return err;
  }
};

export const login = (payload) => async (dispatch) => {
  try {
   dispatch({
    type:"LOGIN_USER",
    payload,
   })
  } catch (err) {
    console.log("error " + err);
    return err;
  }
};

export const logout = (payload) => async (dispatch) => {
  try {
   dispatch({
    type:"LOGOUT_USER",
    payload,
   })
  } catch (err) {
    console.log("error " + err);
    return err;
  }
};


// export const fetchProducts = (payload) => async (dispatch) => {
//   try {
//     console.log("working");
//     let {data} = await axios.get('https://fakestoreapi.com/products/1', payload);
//     console.log(data);
//     dispatch({
//       type: 'GET_DATA',
//       payload: data
//     })
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log('not working');
//   }
// }


export const cartData = (payload) => async (dispatch) => {
  try {
   dispatch({
    type:"ADD_TO_CART",
    payload,
   })
  } catch (err) {
    console.log("error " + err);
    return err;
  }
};


export const checkoutProduct = (payload) => async (dispatch) => {
  try {
   dispatch({
    type:"CHECKOUT_ITEM",
    payload,
   })
  } catch (err) {
    console.log("error " + err);
    return err;
  }
};

export const removeCartData = (payload) => async (dispatch) => {
  try {
   dispatch({
    type:"REMOVE_FROM_CART",
    payload,
   })
  } catch (err) {
    console.log("error " + err);
    return err;
  }
};

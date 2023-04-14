
const initialState = {
  data: [],
  cu: {},
  // products: [],
  cart: [],
  cartitem:{}
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case "LOGIN_USER":
      return {
        ...state,
        cu: action.payload
      }
    case "LOGOUT_USER":
      return {
        ...state,
        cu: {}
      }
    // case "GET_DATA":
    //   return {
    //     ...state,
    //     products: [...state.data, action.payload]
    //   }

    case "ADD_TO_CART":

      return {
        ...state,
        cart:[...state.cart, action.payload]
      }
      case "CHECKOUT_ITEM":
      return {
        ...state,
        cartitem:action.payload
      }

    case "REMOVE_FROM_CART":
      let previousData = state.cart
      let itempresent = previousData.find(function (item) {
        if (item == action.payload) {
          return true;
        }
      })
      if (itempresent) {
        let index = previousData.indexOf(itempresent);
        let point=previousData.splice(index, 1);
        console.log(point);
      }
      // previousData.push(action.payload)
      console.log(previousData);
      return {
        ...state,
        cart: previousData
      }
    default:
      return state;
  }
}

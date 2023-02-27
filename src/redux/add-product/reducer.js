import { ADDPRODUCT, ADDTOCART, DELETE, TOGOLECARTQTY } from "./actionType";
import initialState from "./initialState";
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case ADDTOCART:
      const isItemInCart = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (isItemInCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempOty = item.quantity + action.payload.quantity;
            let totalPrice = tempOty * item.price;
            return { ...item, quantity: tempOty, totalPrice: totalPrice };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
      } else {
        state.carts.push(action.payload);
      }
    case DELETE:
      return {
        ...state,
        carts: [...state.carts.filter((item) => item.id !== action.payload)],
      };
    case TOGOLECARTQTY:
      const tempCart = state.carts.map((item) => {
        if (item.id === action.payload.id) {
          let tempQty = item.quantity;
          let tempTotalPrice = item.totalPrice;

          if (action.payload.typ === "INC") {
            tempQty++;
            if (tempQty === item.stock) tempQty = item.stock;
            tempTotalPrice = tempQty * item.price;
          }

          if (action.payload.typ === "DEC") {
            tempQty--;
            if (tempQty < 1) tempQty = 1;
            tempTotalPrice = tempQty * item.price;
          }

          return { ...item, quantity: tempQty, totalPrice: tempTotalPrice };
        } else {
          return item;
        }
      });

      state.carts = tempCart;
    default:
      return state;
  }
};
export default reducer;

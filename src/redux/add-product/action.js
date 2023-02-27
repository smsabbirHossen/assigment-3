import { ADDPRODUCT, ADDTOCART, DELETE, TOGOLECARTQTY } from "./actionType";

export const addProduct = (product) => {
  return {
    type: ADDPRODUCT,
    payload: product,
  };
};
export const addToCart = (product) => {
  return {
    type: ADDTOCART,
    payload: product,
  };
};
export const deleteToCart = (productId) => {
  return {
    type: DELETE,
    payload: productId,
  };
};
export const togleCartQty = ({ id, typ }) => {
  return {
    type: TOGOLECARTQTY,
    payload: {
      id,
      typ,
    },
  };
};

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/add-product/action";

const Product = ({ product }) => {
  const { id, productName, productUrl, price, stock, category } = product;
  const dispatch = useDispatch();
  const handelAddToCart = (product) => {
    let quantity = 1;
    let totalPrice = quantity * product.price;
    dispatch(
      addToCart({ ...product, quantity: quantity, totalPrice: totalPrice })
    );
  };
  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={productUrl} />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{productName}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{stock}</span>
          </p>
        </div>
        <button
          className="lws-btnAddToCart"
          onClick={() => handelAddToCart(product, id)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;

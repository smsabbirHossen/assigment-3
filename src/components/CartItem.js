import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteToCart } from "../redux/add-product/action";
import { togleCartQty } from "../redux/add-product/action";
const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const {
    productName,
    category,
    productUrl,
    price,
    stock,
    id,
    quantity,
    totalPrice,
  } = product;

  const handelDelete = (id) => {
    dispatch(deleteToCart(id));
  };

  return (
    <div className="space-y-6">
      <div className="cartCard">
        <div className="flex items-center col-span-6 space-x-6">
          <img className="lws-cartImage" src={productUrl} alt="product" />

          <div className="space-y-2">
            <h4 className="lws-cartName">{productName}</h4>
            <p className="lws-cartCategory">{category}</p>
            <p>
              BDT <span className="lws-cartPrice">{price}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
          <div className="flex items-center space-x-4">
            <button
              className="lws-incrementQuantity"
              onClick={() => dispatch(togleCartQty({ id: id, typ: "DEC" }))}
            >
              <AiOutlineMinus />
            </button>
            <span className="lws-cartQuantity">{quantity}</span>
            <button
              className="lws-decrementQuantity"
              onClick={() => dispatch(togleCartQty({ id: id, typ: "INC" }))}
            >
              <AiOutlinePlus />
            </button>
          </div>

          <p className="text-lg font-bold">
            BDT <span className="lws-calculatedPrice">{totalPrice}</span>
          </p>
        </div>

        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button
            className="lws-removeFromCart"
            onClick={() => handelDelete(id)}
          >
            <AiOutlineDelete size={30} className="text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

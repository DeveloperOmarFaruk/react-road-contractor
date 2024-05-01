import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  const cost = props.cost;

  console.log(props.cart);

  return (
    <>
      <div className="contractor-cart">
        <h4>
          My Contractor Cart &nbsp; <i class="fa-solid fa-cart-shopping"></i>
        </h4>

        <div className="row mt-4 ms-0">
          <p className="col-8">
            <strong>Contractors Added: </strong>
          </p>
          <p className="col-4">{cart.length}</p>
        </div>

        <div className="row mt-0 ms-0">
          <p className="col-8">
            <strong>Total Cost: </strong>
          </p>
          <p className="col-4">${cost}</p>
        </div>

        <div className=" mt-0 ms-2 me-2">
          {cart.map((item) => (
            <div key={item.id} className="my-cart-added-row">
              <img src={item.img} alt={item.img} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;

import React from "react";
import BasketItem from "./BasketItem";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"
          alt=""
          className="checkout__ad"
        ></img>
        <div>
          <h4 className="checkout__greeting">
            Hello {user ? user.email : "Guest"}
          </h4>
          <h2 className="checkout__title">Your shopping basket</h2>
          {basket.map((item) => (
            <BasketItem
              id={item.id}
              title={item.title}
              image={item.image}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

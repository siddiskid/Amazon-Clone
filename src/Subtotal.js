import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();

  console.log(basket);

  const totalPrice = (basket) => {
    let temp = 0;
    for (let i = 0; i < basket.length; i++) {
      temp += basket[i].price;
    }
    return temp;
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong> {totalPrice(basket)}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox"></input>
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      ></CurrencyFormat>
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;

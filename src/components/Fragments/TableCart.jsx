import { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode } = useContext(DarkMode);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();

  // useEffect for event state cart
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      // summary total price
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);

      dispatch({
        type : 'UPDATE',
        payload : {
          total : sum
        }
      })

      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  // useReff
  const totalPriceRef = useRef(null);

  // useeffect bisa di pake berkali kali bahkan dengan dependency yang sama
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <div>
      <table
        className={`text-left table-auto border-separate border-spacing-5 ${
          isDarkMode && "text-white"
        } `}
      >
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            cart.map((item) => {
              const product = products.find((product) => product.id == item.id);

              return (
                <tr key={item.id}>
                  <td>{product.title}</td>
                  <td>
                    {product.price.toLocaleString("us-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </td>
                  <td>{item.qty}</td>
                  <td>
                    {(item.qty * product.price).toLocaleString("us-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </td>
                </tr>
              );
            })}
          <tr ref={totalPriceRef}>
            <td colSpan="3" className="font-bold">
              Total Price
            </td>
            <td className="font-bold">
              {total.toLocaleString("us-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableCart;

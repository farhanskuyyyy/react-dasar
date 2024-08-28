import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/product.service";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1000000,
    image: "/images/shoes-1.jpg",
    description: `Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.`,
  },
  {
    id: 2,
    name: "Sepatu Kedua",
    price: 2000000,
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi labore repudiandae illo debitis esse ex qui omnis, maiores, iusto laudantium consequatur aut? Ex neque delectus doloremque esse nisi deleniti quam!`,
  },
  {
    id: 3,
    name: "Sepatu Ketiga",
    price: 3000000,
    image: "/images/shoes-1.jpg",
    description: `Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products,setProducts] = useState([]);

  // componentdidmount , ibaratnya ini get data dari api
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  // useEffect for event state cart
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      // summary total price
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);

      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart,products]);

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

  // useEffect fetch api
  useEffect(() => {
    getProducts((data) => {
      setProducts(data)
    });
  });

  const handeLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: id,
          qty: 1,
        },
      ]);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-sky-600 text-white items-center px-10 py-5">
        {email}
        <Button classname="bg-black ml-5" onClick={handeLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center mt-4">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 && products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image}></CardProduct.Header>
              <CardProduct.Body name={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              ></CardProduct.Footer>
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-4">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 && cart.map((item) => {
                const product = products.find(
                  (product) => product.id == item.id
                );

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
                  {totalPrice.toLocaleString("us-US", {
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
      </div>
    </Fragment>
  );
};

export default ProductsPage;

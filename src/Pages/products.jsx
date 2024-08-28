import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp 1.000.000",
    image: "/images/shoes-1.jpg",
    description: `Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.`,
  },
  {
    id: 2,
    name: "Sepatu Kedua",
    price: "Rp 2.000.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi labore repudiandae illo debitis esse ex qui omnis, maiores, iusto laudantium consequatur aut? Ex neque delectus doloremque esse nisi deleniti quam!`,
  },
  {
    id: 3,
    name: "Sepatu Ketiga",
    price: "Rp 3.000.000",
    image: "/images/shoes-1.jpg",
    description: `Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handeLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
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
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image}></CardProduct.Header>
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price}></CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
      <div className="flex w-100 justify-center mt-4">
        <Counter></Counter>
      </div>
    </Fragment>
  );
};

export default ProductsPage;

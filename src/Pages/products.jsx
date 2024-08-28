import CardProduct from "../components/Fragments/CardProduct";

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

const ProductsPage = () => {
  return (
    <div className="flex justify-center">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image}></CardProduct.Header>
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price}></CardProduct.Footer>
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;

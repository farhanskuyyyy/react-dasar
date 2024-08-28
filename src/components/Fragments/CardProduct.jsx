import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;

  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-3 mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img className="rounded-t-lg" src={image} alt="" />
    </a>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="p-2 h-full">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {children}
      </p>
    </div>
  );
};

const Footer = (props) => {
  const { id, price, handleAddToCart } = props;
  return (
    <div className="flex items-center justify-between p-2">
      <span className="text-xl font-bold text-white">
        {price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </span>
      <Button
        classname="bg-blue-500"
        onClick={() => {
          handleAddToCart(id);
        }}
      >
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;

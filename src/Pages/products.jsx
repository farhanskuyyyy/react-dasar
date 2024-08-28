import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg"></CardProduct.Header>
        <CardProduct.Body title="Sepatu Baru">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000"></CardProduct.Footer>
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg"></CardProduct.Header>
        <CardProduct.Body title="Sepatu Kedua">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000"></CardProduct.Footer>
      </CardProduct>
    </div>
  );
};

export default ProductsPage;

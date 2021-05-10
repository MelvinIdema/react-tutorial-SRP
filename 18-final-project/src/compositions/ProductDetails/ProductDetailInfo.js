import Button from "../../components/Button/index.js";

export default function ProductDetailInfo({ product, onProductAdd }) {
  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <Button onClick={() => onProductAdd(product)} label={`$${product.price}`}></Button>
    </>
  );
}

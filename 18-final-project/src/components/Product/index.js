import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../Button/index.js";
import "./index.css";

export default function Product(props) {
    const { details } = props;

    const productFromCart = props.cart.find(
        (product) => product.id === details.id
    );
    const quantity = productFromCart ? productFromCart.quantity : 0;

    return (
        <div className="product">
            <div className="product-image-container">
                <Link to={`/products/${details.id}`}>
                    <img
                        src={details.image}
                        width="100"
                        height="100"
                        className="product-image"
                        alt={details.name}
                    />
                </Link>
                {quantity > 0 && (
                    <div className="product-quantity-container">
                        <div className="product-quantity">{quantity}</div>
                    </div>
                )}
            </div>
            <div className="product-info">
                <h3>{details.name}</h3>
                <p>{details.description}</p>
            </div>
            <div className="product-checkout">
                <div>
                    {quantity > 0 && (
                        <Button
                            outline
                            onClick={() => props.onProductDelete(details.id)}
                            className="product-delete"
                            label="x"
                        />
                    )}
                </div>
                <Button
                    outline
                    onClick={() => props.onProductAdd(details)}
                    label={`$${details.price}`}
                />
            </div>
        </div>
    );
}

Product.propTypes = {
    /** The global cart state */
    cart: PropTypes.array.isRequired,
    /** The product details */
    details: PropTypes.shape({
       id: PropTypes.number,
       image: PropTypes.string,
       name: PropTypes.string,
       description: PropTypes.string,
       price: PropTypes.string,
    }).isRequired,
    /** A function to add a product to the cart */
    onProductAdd: PropTypes.func.isRequired,
    /** A function to delete a product from the cart */
    onProductDelete: PropTypes.func.isRequired,
}
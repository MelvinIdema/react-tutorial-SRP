import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Product from "../../components/Product/index.js";
import useFetch from "../../helpers/useFetch.js";
import Loader from "../../components/Loader/index.js";

export default function Products(props) {
    const [products, setProducts] = useState([]);
    const { get, loading } = useFetch(
        "https://react-tutorial-demo.firebaseio.com/"
    );

    useEffect(() => {
        get("supermarket.json")
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => console.log("Could not load products", error));
    }, [get]);

    return (
        <div className="products-layout">
            <h1>Products</h1>
            <p>Take a look at our products</p>
            <div className="products-grid">
                {loading && <Loader />}
                {products && products.map((product) => {
                    return (
                        <Product
                            key={product.id}
                            details={product}
                            cart={props.cart}
                            onProductAdd={props.onProductAdd}
                            onProductDelete={props.onProductDelete}
                        />
                    );
                })}
            </div>
        </div>
    );
}

Products.propTypes = {
    /** The cart */
    cart: PropTypes.array.isRequired,
    /** A function to add a product to the cart */
    onProductAdd: PropTypes.func.isRequired,
    /** A function to delete a product from the cart */
    onProductDelete: PropTypes.func.isRequired,
}
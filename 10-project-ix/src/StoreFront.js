import React, {useEffect, useState} from "react";
import Product from "./Product.js";
import Loader from "./Loader.js";

export default function StoreFront() {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    /** Fetch products from API */
    useEffect(() => {
        fetch("https://react-tutorial-demo.firebaseio.com/products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err))
            .finally(_ => setIsLoading(false));
    }, [])

    if(isLoading) return <Loader />

    return (!isLoading && <div className="store-front">
        {products && products.map(product => {
            return <Product details={product} />
        })}
    </div>);
}

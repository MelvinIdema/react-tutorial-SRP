import React, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import useFetch from "./useFetch.js";
import Loader from "./Loader.js";

export default function ProductDetails () {
    const [product, setProduct] = useState();
    const params = useParams();
    const {get, loading} = useFetch('https://react-tutorial-demo.firebaseio.com/productdetails/');

    useEffect(() => {
        get(`id${params.id}.json`)
            .then(data => setProduct(data))
            .catch(err => console.error(err));
    }, [])

    return <div>
        <Link to="/">Back home</Link>
        {loading && <Loader />}
        {product && <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <img src={product.image} width="100" />
        </div>}
    </div>
}

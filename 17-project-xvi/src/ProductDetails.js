import {useEffect, useState} from "react";
import {useParams, useRouteMatch, Switch, Route, Link} from "react-router-dom";
import useFetch from "./useFetch.js";
import ProductDelivery from "./ProductDelivery.js";

export default function ProductDetails () {
    const params = useParams();
    const [product, setProduct] = useState({});
    const {get} = useFetch("https://react-tutorial-demo.firebaseio.com/");
    const match = useRouteMatch();

    const id = params.id;

    useEffect(() => {
        get(`productdetails/id${id}.json`)
            .then(data => {
                setProduct(data);
            })
            .catch(error => console.log(error))
    }, []);

    return <div>
        {product && <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <img src={product.image} width="100" />
            <p>View <Link to={`${match.url}/delivery`}>delivery notes</Link></p>

            <Switch>
                <Route exact path={`${match.path}/delivery`}>
                    <ProductDelivery />
                </Route>
            </Switch>
        </div>}
    </div>
}
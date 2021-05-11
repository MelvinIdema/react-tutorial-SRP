import { useState, useEffect } from "react";
import {
    NavLink,
    Switch,
    Route,
    useParams,
    useRouteMatch,
} from "react-router-dom";
import useFetch from "../../helpers/useFetch.js";
import ProductDetailInfo from "./ProductDetailInfo.js";
import ProductDetailNutrition from "./ProductDetailNutrition.js";
import ProductDetailStorage from "./ProductDetailStorage.js";

import "./index.css";

export default function ProductDetails(props) {
    const [product, setProduct] = useState({});
    const { get } = useFetch("https://react.ikbenmel.vin/");
    const params = useParams();
    const match = useRouteMatch();

    // TODO: Data binnenkrijgen via Props
    // TODO: Compositions hernoemen naar Sections
    useEffect(() => {
        // Als params niet aanwezig is
        if(!params) return setProduct({
            "description": "Test Product",
            "id": 3,
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Icon-Experiment.svg/1200px-Icon-Experiment.svg.png",
            "name": "Test",
            "nutrition": {
                "carbs": 10,
                "fat": 10,
                "protein": 10,
                "salt": 10
            },
            "price": 10,
            "price_id": "price_1Ipc94Jiv8wpB3sqRZM39T6B",
            "storage": "Lorem ipsum doler sit amet."
        })

        // Als params wel aanwezig is
        get(`productinfo/id${params.id}.json`)
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => console.log("Could not load product details", error));
    }, [params, get]);

    return (
        <div className="product-details-layout">
            <div>
                <h2>{product.name}</h2>
                <img
                    src={product.image}
                    width="125"
                    height="125"
                    className="product-details-image"
                    alt={product.name}
                />
            </div>
            <div>
                <div className="tabs">
                    <ul>
                        <li>
                            <NavLink exact activeClassName="tab-active" to={match.url}>
                                Details
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact
                                activeClassName="tab-active"
                                to={match.url + "/nutrition"}
                            >
                                Nutrition
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact
                                activeClassName="tab-active"
                                to={match.url + "/storage"}
                            >
                                Storage
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path={match.path}>
                        <ProductDetailInfo
                            onProductAdd={props.onProductAdd}
                            product={product}
                        />
                    </Route>

                    <Route path={match.path + "/nutrition"}>
                        <ProductDetailNutrition nutrition={product.nutrition} />
                    </Route>

                    <Route path={match.path + "/storage"}>
                        <ProductDetailStorage storage={product.storage} />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

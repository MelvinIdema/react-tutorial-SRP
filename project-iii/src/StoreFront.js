import React from "react";
import Product from "./Product.js";

import cupcake from "./cupcake.png";
import donut from "./donut.png";

export default function StoreFront() {
    // hardcoded products for this project
    const products = [{
        name: "Donut",
        description: "Perfectly round donut with glaze",
        image: donut
    }, {
        name: "Cupcake",
        description: "Tasty cupcake with a lot of sugar",
        image: cupcake
    }]

    return <div className="store-front">
        {/* render the two Products here */}
        <Product details={products[0]}/>
        <Product details={products[1]}/>
    </div>;
}
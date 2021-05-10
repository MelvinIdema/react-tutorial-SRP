import Products from "./index.js";
import { BrowserRouter } from "react-router-dom";

export default {
    title: "Compositions/Products",
    component: Products,
    decorators: [Story => <BrowserRouter><div className="container">{Story()}</div></BrowserRouter>],
}

const Template = args => <Products {...args} />;

export const Default = Template.bind({});
Default.args = {
    cart: [],
}

export const WithProduct = Template.bind({});
WithProduct.args = {
    cart: [
        {
            "description": "1 donut with chocolate sprinkles",
            "id": 3,
            "image": "https://res.cloudinary.com/dywlap0vj/image/upload/v1620660562/react-bakery-app/donut_osbr9l.png",
            "name": "Donut",
            "price": 3.49,
            "price_id": "price_1IpbvEJiv8wpB3sqcESDTnm8",
            "quantity":6
        },
    ]
}
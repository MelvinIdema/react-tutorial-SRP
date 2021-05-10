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
            "description":"200g cheese block",
            "id":1,
            "image":"https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png",
            "name":"Cheese",
            "price":10,
            "price_id": "price_1HuavSGuhXEITAut56IgndJf",
            "quantity":6
        },
    ]
}
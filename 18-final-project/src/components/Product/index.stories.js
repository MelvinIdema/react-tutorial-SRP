import Product from "./index.js";
import { BrowserRouter } from "react-router-dom";

export default {
    title: "Components/Product",
    component: Product,
    decorators: [Story => <BrowserRouter>{Story()}</BrowserRouter>],
}

const Template = args => <Product {...args} />

export const Default = Template.bind({});
Default.args = {
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
    ],
    details: {
        "description":"200g cheese block",
        "id":1,
        "image":"https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png",
        "name":"Cheese",
        "price":10,
        "price_id":"price_1HuavSGuhXEITAut56IgndJf"
    }
}
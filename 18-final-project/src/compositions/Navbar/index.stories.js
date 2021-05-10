import Navbar from "./index.js";
import { BrowserRouter } from "react-router-dom";

export default {
    title: "Compositions/Navbar",
    component: Navbar,
    decorators: [Story => <BrowserRouter>{Story()}</BrowserRouter>],
}

const Template = args => <Navbar {...args} />

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
        {
            "description":"500g pineapple",
            "id":4,
            "image":"https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/pineapple.png",
            "name":"Pineapple",
            "price":3.25,
            "price_id":"price_1HxW59GuhXEITAutCwoYZoOJ",
            "quantity":5
        }
    ],
}

export const Empty = Template.bind({});
Empty.args = {
    ...Default.args,
    cart: [],
}
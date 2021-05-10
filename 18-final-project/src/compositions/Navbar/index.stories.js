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
            "description": "1 donut with chocolate sprinkles",
            "id": 3,
            "image": "https://res.cloudinary.com/dywlap0vj/image/upload/v1620660562/react-bakery-app/donut_osbr9l.png",
            "name": "Donut",
            "price": 3.49,
            "price_id": "price_1IpbvEJiv8wpB3sqcESDTnm8",
            "quantity":6
        },
    ],
}

export const Empty = Template.bind({});
Empty.args = {
    ...Default.args,
    cart: [],
}
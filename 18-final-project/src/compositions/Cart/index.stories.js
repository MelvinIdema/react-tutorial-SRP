import Cart from "./index";

export default {
    title: "Compositions/Cart",
    component: Cart,
    decorators: [Story => <div className="container">{Story()}</div>],
}

const Template = args => <Cart {...args} />

export const Empty = Template.bind({});
Empty.args = {
    cart: [],
}

export const Filled = Template.bind({});
Filled.args = {
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
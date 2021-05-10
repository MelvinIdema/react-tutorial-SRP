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
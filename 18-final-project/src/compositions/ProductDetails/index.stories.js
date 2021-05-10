import ProductDetails from "./index.js";
import { MemoryRouter, Route } from "react-router-dom";

export default {
    title: "Compositions/Product Details",
    component: ProductDetails,
}

const Template = ({initialEntries, ...args}) => <MemoryRouter initialEntries={initialEntries}><Route path="/products/:id"><div className="container"><ProductDetails {...args} /></div></Route></MemoryRouter>
;

export const Default = Template.bind({});
Default.args = {
    initialEntries: ['/products/1']
}
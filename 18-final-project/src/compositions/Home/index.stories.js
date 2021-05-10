import Home from "./index.js";
import { BrowserRouter } from "react-router-dom";

export default {
    title: "Compositions/Home",
    component: Home,
    decorators: [Story => <BrowserRouter><div className="container">{Story()}</div></BrowserRouter>],
}

export const Default = args => <Home {...args} />;
Default.args = {

}
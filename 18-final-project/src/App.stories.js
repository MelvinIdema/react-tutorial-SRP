import App from "./App.js";
import { MemoryRouter } from "react-router-dom";

export default {
    title: "App",
    component: App,
    decorators: [Story => <MemoryRouter initialEntires={['/']}>{Story()}</MemoryRouter>],
}

export const Default = args => <App {...args} />
Default.args = {

}
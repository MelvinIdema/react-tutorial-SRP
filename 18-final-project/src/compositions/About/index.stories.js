import About from "./index.js";

export default {
    title: "Compositions/About",
    component: About,
    decorators: [Story => <div className="container">{Story()}</div>],
}

export const Default = args => <About {...args} />;
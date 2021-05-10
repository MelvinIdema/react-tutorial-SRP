import Loader from "./index.js";

export default {
    title: "Components/Loader",
    component: Loader,
    decorators: [Story => <div style={{display: "grid", placeItems: "center"}}>{Story()}</div>],
}

export const Default = args => <Loader {...args} />;
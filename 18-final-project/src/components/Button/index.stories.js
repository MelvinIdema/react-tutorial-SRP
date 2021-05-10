import Button from "./";

export default {
    title: "Components/Button",
    component: Button,
    decorators: [Story => <div style={{display: 'grid', placeItems: 'center', height: '100vh'}}>{Story()}</div> ],
}

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "Primary Button"
}

export const Outline = Template.bind({});
Outline.args = {
    label: "Outline Button",
    outline: true
}
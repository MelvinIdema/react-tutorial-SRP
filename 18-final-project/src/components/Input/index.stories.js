import Input from "./index.js";

export default {
    title: 'Components/Input',
    component: Input,
    decorators: [Story => <div style={{display: 'grid', placeItems: 'center', height: '100vh'}}>{Story()}</div> ],
}

const Template = (args) => <Input {...args}/>;

export const Default = Template.bind({});
Default.args = {
    placeholder: "Full name",
    required: false,
    type: "text",
}

export const Required = Template.bind({});
Required.args = {
    ...Default.args,
    required: true,
}

export const Email = Template.bind({});
Email.args = {
    ...Default.args,
    placeholder: "Email Address",
    type: "email",
}
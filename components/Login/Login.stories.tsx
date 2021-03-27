import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Login from "./Login";

export default {
  title: "Login",
  component: Login,
} as Meta;

const Template: Story = (args) => <Login {...args} />;

export const LoginComponent = Template.bind({});
LoginComponent.args = {};

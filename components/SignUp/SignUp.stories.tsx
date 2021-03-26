import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SignUp from "./SignUp";

export default {
  title: "SignUp",
  component: SignUp,
} as Meta;

const Template: Story = (args) => <SignUp {...args} />;

export const SignUpComponent = Template.bind({});
SignUpComponent.args = {};

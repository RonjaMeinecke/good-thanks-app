import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import XButton, { XButtonProps } from "./XButton";

export default {
  title: "XButton",
  component: XButton,
} as Meta;

const Template: Story<XButtonProps> = (args) => <XButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
};

import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import PlusButton, { ButtonProps } from "./PlusButton";

export default {
  title: "Common/Button",
  component: PlusButton,
} as Meta;

const Template: Story<ButtonProps> = (args) => <PlusButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
};
export const SecondaryCoral = Template.bind({});
SecondaryCoral.args = {
  secondary: true,
  coral: true,
};

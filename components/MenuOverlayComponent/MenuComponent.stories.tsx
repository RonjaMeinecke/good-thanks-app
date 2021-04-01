import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import MenuOverlay, { MenuProps } from "./MenuComponent";

export default {
  title: "BurgerMenu",
  component: MenuOverlay,
  parameters: { layout: "fullscreen" },
} as Meta;

const Template: Story<MenuProps> = (args) => <MenuOverlay {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
};

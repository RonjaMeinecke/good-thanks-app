import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Logo, { LogoProps } from "./Logo";

export default {
  title: "Logo",
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const SplashScreen = Template.bind({});
SplashScreen.args = {
  backgroundColor: "var(--app-color-turquoise)",
  fontColor: "var(--app-font-color-brown)",
};

export const Header = Template.bind({});
Header.args = {
  backgroundColor: "var(--app-color-blue)",
  fontColor: "var(--app-color-pastelYellow)",
  outlineColor: "var(--app-color-pastelYellow)",
};

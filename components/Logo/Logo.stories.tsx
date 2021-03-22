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
  backgroundColor: "var(--primary-app-color-turquoise)",
  fontColor: "var(--primary-font-color-brown)",
};

export const Header = Template.bind({});
Header.args = {
  backgroundColor: "var(--primary-app-color-green)",
  fontColor: "var(--primary-app-color-pastelYellow)",
  outlineColor: "var(--primary-app-color-pastelYellow)",
};

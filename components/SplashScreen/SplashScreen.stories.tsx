import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SplashScreen, { SplashScreenProps } from "./SplashScreen";

export default {
  title: "SplashScreen",
  component: SplashScreen,
} as Meta;

const Template: Story<SplashScreenProps> = (args) => <SplashScreen {...args} />;

export const SplashScreenComponent = Template.bind({});
SplashScreenComponent.args = {
  fontColor: "var(--primary-font-color-brown)",
};

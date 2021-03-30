import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Header, { HeaderProps } from "./Header";

export default {
  title: "Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const BlueHeader = Template.bind({});
BlueHeader.args = {
  backgroundColor: "var(--primary-app-color-blue)",
  outlineColor: "var(--primary-app-color-pastelYellow)",
};

export const CoralHeader = Template.bind({});
CoralHeader.args = {
  backgroundColor: "var(--primary-app-color-coral)",
  outlineColor: "var(--primary-app-color-pastelYellow)",
};

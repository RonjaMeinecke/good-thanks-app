import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import HeaderComponent from "./HeaderComponent";

export default {
  title: "HeaderComponent",
  component: HeaderComponent,
} as Meta;

const Template = (args) => <HeaderComponent {...args} />;

export const HomeHeaderComponent = Template.bind({});
HomeHeaderComponent.args = {
  backgroundColor: "var(--app-color-blue)",
};

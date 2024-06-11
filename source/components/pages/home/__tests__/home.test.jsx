// bunx jest source/components/pages/home/__tests__/home.test.jsx

import React from "react";
import { render } from "@testing-library/react-native";

import { Home } from "components/pages/home/home";

describe("Home", () => {
  it("should render correctly", () => {
    const wrapper = render(<Home />);

    const titleElement = wrapper.getByText("Get Started");

    expect(titleElement).toBeTruthy();

    expect(wrapper).toMatchSnapshot();
  });
});

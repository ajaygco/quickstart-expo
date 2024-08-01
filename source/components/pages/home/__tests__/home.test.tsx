// bun run test source/components/pages/home/__tests__/home.test.tsx

import * as React from "react";
import { render } from "@testing-library/react-native";

import { Home } from "@app/components/pages/home/home";

describe("Home", () => {
  it("should render correctly", () => {
    const wrapper = render(<Home />);

    const titleElement = wrapper.getByText("Get Started");

    expect(titleElement).toBeTruthy();

    expect(wrapper).toMatchSnapshot();
  });
});

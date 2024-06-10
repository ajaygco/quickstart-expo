// bunx jest source/components/shared/__tests__/link.shared.test.jsx

import React from "react";
import { Text, Linking } from "react-native";
import { fireEvent, render } from "@testing-library/react-native";

import { Link } from "components/shared/link.shared";

jest.mock("helpers/analytics.helper", () => ({
  captureException: jest.fn(),
}));

jest.mock("react-native/Libraries/Linking/Linking", () => ({
  openURL: jest.fn(() => Promise.resolve(true)),
}));

describe("Link", () => {
  it("should render correctly", () => {
    const wrapper = render(
      <Link to="https://example.com" testID="element">
        <Text>Visit Website</Text>
      </Link>,
    );

    const element = wrapper.getByTestId("element");

    const text = wrapper.getByText("Visit Website");

    expect(text).toBeDefined();
    expect(element).toBeDefined();

    expect(wrapper).toMatchSnapshot();
  });

  it("should open the 'to' link when pressed", async () => {
    const wrapper = render(
      <Link to="https://example.com" testID="element">
        <Text>Visit Website</Text>
      </Link>,
    );

    const element = wrapper.getByTestId("element");

    expect(element).toBeDefined();

    fireEvent.press(element);
    expect(Linking.openURL).toHaveBeenCalledWith("https://example.com");

    expect(wrapper).toMatchSnapshot();
  });
});

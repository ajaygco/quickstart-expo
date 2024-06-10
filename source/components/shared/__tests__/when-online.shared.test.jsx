// bunx jest source/components/shared/__tests__/when-online.shared.test.jsx

import React from "react";
import { useIsConnected } from "react-native-offline";
import { render } from "@testing-library/react-native";
import { Text } from "react-native";

import { WhenOnline } from "components/shared/when-online.shared";

jest.mock("react-native-offline", () => ({
  useIsConnected: jest.fn(),
}));

describe("WhenOnline", () => {
  it("should render children when online", () => {
    useIsConnected.mockReturnValue(true);

    const wrapper = render(
      <WhenOnline>
        <Text>Online Content</Text>
      </WhenOnline>,
    );

    const contentElement = wrapper.getByText("Online Content");

    expect(contentElement).toBeTruthy();

    expect(wrapper).toMatchSnapshot();
  });

  it("should render nothing when offline", () => {
    useIsConnected.mockReturnValue(false);

    const wrapper = render(
      <WhenOnline>
        <Text>Online Content</Text>
      </WhenOnline>,
    );

    const contentElement = wrapper.queryByText("Online Content");

    expect(contentElement).toBeNull();

    expect(wrapper).toMatchSnapshot();
  });
});

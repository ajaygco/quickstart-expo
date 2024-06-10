// bunx jest source/components/shared/__tests__/empty-state.shared.test.jsx

import React from "react";
import { render } from "@testing-library/react-native";
import { View } from "react-native";

import { EmptyState } from "components/shared/empty-state.shared";

describe("EmptyState", () => {
  it("should render correctly", () => {
    const wrapper = render(
      <EmptyState
        title="Title"
        message="Some Message"
        illustration={<View testID="actingIllustration" />}
      />,
    );

    const titleElement = wrapper.getByText("Title");
    const MessageElement = wrapper.getByText("Some Message");

    const illustration = wrapper.getByTestId("actingIllustration");

    expect(titleElement).toBeTruthy();
    expect(MessageElement).toBeTruthy();

    expect(illustration).toBeTruthy();

    expect(wrapper).toMatchSnapshot();
  });

  it("should not render illustration when empty", () => {
    const wrapper = render(<EmptyState title="Title" message="Some Message" />);

    const titleElement = wrapper.getByText("Title");
    const MessageElement = wrapper.getByText("Some Message");

    const illustration = wrapper.queryByTestId("actingIllustration");

    expect(titleElement).toBeTruthy();
    expect(MessageElement).toBeTruthy();

    expect(illustration).toBeFalsy();

    expect(wrapper).toMatchSnapshot();
  });
});

// bun run test source/components/shared/__tests__/loading-state.shared.test.tsx

import * as React from "react";
import { render } from "@testing-library/react-native";

import { LoadingState } from "@app/components/shared/loading-state.shared";

describe("LoadingState", () => {
  it("should render correctly", () => {
    const wrapper = render(<LoadingState />);

    expect(wrapper).toMatchSnapshot();
  });
});

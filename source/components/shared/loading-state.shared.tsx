// Modules
import * as React from "react";
import { ActivityIndicator, View } from "react-native";
import type { ActivityIndicatorProps } from "react-native";

// Types
export interface LoadingStateProps extends ActivityIndicatorProps {}

// Component: Presentation
export const LoadingStateUi = (
  props: LoadingStateProps,
): React.ReactElement => {
  return (
    <View className="items-center justify-center">
      <ActivityIndicator {...props} />
    </View>
  );
};

// Component: Logic
export const LoadingStateLogic = (
  props: LoadingStateProps,
): React.ReactElement => {
  return <LoadingStateUi {...props} />;
};

// Component: Memo
export const LoadingState = React.memo(
  (props: LoadingStateProps): React.ReactElement => {
    return <LoadingStateLogic {...props} />;
  },
);

// Modules
import * as React from "react";
import { ActivityIndicator, View } from "react-native";
import type { ActivityIndicatorProps } from "react-native";

// Component
export const LoadingState: React.FC<ActivityIndicatorProps> = (
  props,
): React.ReactElement => {
  return (
    <View className="items-center justify-center">
      <ActivityIndicator {...props} />
    </View>
  );
};

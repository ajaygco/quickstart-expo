// Modules
import React from "react";
import { ActivityIndicator, View } from "react-native";

// Component: Presentation
export const LoadingStateUi = (props) => {
  return (
    <View className="items-center justify-center">
      <ActivityIndicator {...props} />
    </View>
  );
};

// Component: Logic
export const LoadingStateLogic = (props) => {
  return <LoadingStateUi {...props} />;
};

// Component: Memo
export const LoadingState = React.memo((props) => {
  return <LoadingStateLogic {...props} />;
});

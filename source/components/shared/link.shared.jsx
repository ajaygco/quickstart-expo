// Modules
import React from "react";
import { Linking, Pressable } from "react-native";

// Helpers
import { Alert } from "helpers/alert.helper";
import { captureException } from "helpers/analytics.helper";

// Component: Presentation
export const LinkUi = ({ onPress, children, ...props }) => {
  return (
    <Pressable hitSlop={12} onPress={onPress} {...props}>
      {children}
    </Pressable>
  );
};

// Component: Logic
export const LinkLogic = ({ to, ...props }) => {
  // On Press
  const onPress = async () => {
    try {
      await Linking.openURL(to);
    } catch (error) {
      captureException(error);

      Alert.error({
        title: "Error",
        message: "Couldn't open link",
      });
    }
  };

  return <LinkUi onPress={onPress} {...props} />;
};

// Component: Memo
export const Link = React.memo((props) => {
  return <LinkLogic {...props} />;
});

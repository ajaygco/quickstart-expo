// Modules
import React from "react";
import { Text, View } from "react-native";

// Shared
import { If } from "components/shared/if.shared";

// Component: Presentation
export const EmptyStateUi = ({ title, message, illustration }) => {
  const shouldShowIllustration = React.isValidElement(illustration);

  return (
    <View className="w-full items-center justify-center p-16">
      <If condition={shouldShowIllustration}>
        <View className="w-64 h-64 flex items-center justify-center mb-8">
          {illustration}
        </View>
      </If>

      <If condition={title}>
        <Text
          allowFontScaling={false}
          className="text-xl text-gray-800 font-sans font-bold mb-2"
        >
          {title}
        </Text>
      </If>

      <If condition={message}>
        <Text
          allowFontScaling={false}
          className="text-base text-gray-600 text-center font-sans"
        >
          {message}
        </Text>
      </If>
    </View>
  );
};

// Component: Logic
export const EmptyStateLogic = (props) => {
  return <EmptyStateUi {...props} />;
};

// Component: Memo
export const EmptyState = React.memo((props) => {
  return <EmptyStateLogic {...props} />;
});

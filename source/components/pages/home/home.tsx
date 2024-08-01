// Modules
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";

// Types
interface HomeCommonProps {}
export interface HomeUiProps extends HomeCommonProps {}
export interface HomeProps extends HomeCommonProps {}

// Component: Presentation
export const HomeUi = ({}: HomeUiProps): React.ReactElement => {
  return (
    <SafeAreaView className="w-full h-full bg-white flex flex-col items-center justify-center">
      <View className="mb-12">
        <Text allowFontScaling={false} className="text-4xl">
          👋
        </Text>
      </View>
    </SafeAreaView>
  );
};

// Component: Logic
export const Home = ({}: HomeProps): React.ReactElement => {
  return <HomeUi />;
};

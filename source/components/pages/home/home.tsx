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
    <SafeAreaView className="w-screen h-screen bg-red flex flex-col items-center justify-center">
      <View className="flex-1 mb-12">
        <Text allowFontScaling={false} className="text-4xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, aliquam
          voluptatibus. Cum reiciendis quasi optio, tempora accusamus distinctio
          vitae facilis error animi ab, quaerat doloribus, blanditiis laborum
          quas suscipit incidunt.
        </Text>
      </View>
    </SafeAreaView>
  );
};

// Component: Logic
export const Home = ({}: HomeProps): React.ReactElement => {
  return <HomeUi />;
};

// Modules
import * as React from "react";
import { Text, View } from "react-native";

// Types
interface HomeCommonProps {}
export interface HomeUiProps extends HomeCommonProps {}
export interface HomeProps extends HomeCommonProps {}

// Component: Presentation
export const HomeUi = ({}: HomeUiProps): React.ReactElement => {
  return (
    <View className="p-4">
      <Text allowFontScaling={false} className="text-lg font-sans">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci hic
        molestias delectus, labore dicta accusantium soluta quas tenetur
        debitis, consequuntur sunt quaerat eos ea asperiores modi quam, aperiam
        facilis quia?
      </Text>
    </View>
  );
};

// Component: Logic
export const Home = ({}: HomeProps): React.ReactElement => {
  return <HomeUi />;
};

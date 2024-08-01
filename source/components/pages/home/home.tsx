// Modules
import * as React from "react";
import { Text, View } from "react-native";

// Types
type HomeProps = {};

// Component: Presentation
export const Home: React.FC<HomeProps> = (): React.ReactElement => {
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

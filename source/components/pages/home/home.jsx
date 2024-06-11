// Modules
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";

// Shared
import { Link } from "components/shared/link.shared";

// Component: Presentation
export const HomeUi = () => {
  return (
    <SafeAreaView className="w-full h-full bg-white flex flex-col items-center justify-center">
      <View className="mb-12">
        <Text allowFontScaling={false} className="text-4xl">
          👋
        </Text>
      </View>

      <View className="mb-2">
        <Text
          allowFontScaling={false}
          className="text-3xl font-sans font-black"
        >
          Get Started
        </Text>
      </View>

      <View className="w-full px-8 mb-6">
        <Text allowFontScaling={false} className="text-lg text-center">
          This quickstart has React Navigation, NativeWind and Expo Fonts
          pre-configured and comes with lots of useful components.
        </Text>
      </View>

      <View className="w-full px-8">
        <Link to="https://github.com/ajaygco">
          <Text allowFontScaling={false} className="text-lg text-center">
            Made with 🍕 by{" "}
            <Text allowFontScaling={false} className="text-lg text-blue-500">
              @ajaygco
            </Text>
          </Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

// Component: Logic
export const Home = () => {
  return <HomeUi />;
};

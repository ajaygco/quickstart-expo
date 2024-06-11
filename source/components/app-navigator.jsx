// Modules
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { Link } from "./shared/link.shared";

// Create Navigators
const Stack = createNativeStackNavigator();

// Dummy Screens
const FirstScreen = () => (
  <SafeAreaView className="w-full h-full bg-white flex flex-col items-center justify-center">
    <View className="mb-12">
      <Text allowFontScaling={false} className="text-4xl">
        👋
      </Text>
    </View>

    <View className="mb-2">
      <Text allowFontScaling={false} className="text-3xl font-sans font-black">
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

// Component: Presentation
export const AppNavigatorUi = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ScreenOne" component={FirstScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Component: Logic
export const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <AppNavigatorUi />
    </SafeAreaProvider>
  );
};

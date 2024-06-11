// Modules
import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import {
  useFonts,
  Figtree_300Light,
  Figtree_400Regular,
  Figtree_600SemiBold,
  Figtree_900Black,
} from "@expo-google-fonts/figtree";

// Navigators
import { AppNavigator } from "components/app-navigator";

// NOTE:
// Keep the splash screen visible while we do startup work.
// It is recommended to call this in global scope without awaiting,
// rather than inside React components or hooks, because otherwise
// this might be called too late, when the splash screen is already hidden.
SplashScreen.preventAutoHideAsync();

// Component: Presentation
export const AppSplashUi = ({ isAppReady, onLayoutRootView }) => {
  if (isAppReady) {
    return (
      <View onLayout={onLayoutRootView} className="w-full h-full">
        <AppNavigator />
      </View>
    );
  }

  return null;
};

// Component: Logic
export const AppSplash = () => {
  // Hooks
  const [areFontsLoaded] = useFonts({
    Figtree_300Light,
    Figtree_400Regular,
    Figtree_600SemiBold,
    Figtree_900Black,
  });

  // State
  const [isAppReady, setIsAppReady] = React.useState(false);

  // On Layout Root View
  const onLayoutRootView = React.useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  React.useEffect(() => {
    if (areFontsLoaded) {
      setIsAppReady(true);
    }
  }, [areFontsLoaded]);

  return (
    <AppSplashUi isAppReady={isAppReady} onLayoutRootView={onLayoutRootView} />
  );
};

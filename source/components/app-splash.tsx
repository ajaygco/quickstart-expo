// Modules
import * as React from "react";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import {
  useFonts,
  Figtree_400Regular,
  Figtree_600SemiBold,
  Figtree_900Black,
} from "@expo-google-fonts/figtree";

// Navigators
import { AppNavigator } from "@app/components/app-navigator";

// Types
type AppSplashProps = {};

// NOTE:
// Keep the splash screen visible while we do startup work.
// It is recommended to call this in global scope without awaiting,
// rather than inside React components or hooks, because otherwise
// this might be called too late, when the splash screen is already hidden.
SplashScreen.preventAutoHideAsync();

// Component
export const AppSplash: React.FC<
  AppSplashProps
> = (): React.ReactElement | null => {
  // Hooks
  const [areFontsLoaded] = useFonts({
    Figtree_400Regular,
    Figtree_600SemiBold,
    Figtree_900Black,
  });

  // State
  const [isAppReady, setIsAppReady] = React.useState<boolean>(false);

  // On Layout Root View
  const onLayoutRootView = React.useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  React.useEffect(() => {
    setIsAppReady(areFontsLoaded);
  }, [areFontsLoaded]);

  if (!isAppReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} className="w-full h-full">
      <AppNavigator />
    </View>
  );
};

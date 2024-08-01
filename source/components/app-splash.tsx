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
interface AppSplashCommonProps {}
interface AppSplashUiProps extends AppSplashCommonProps {
  isAppReady: boolean;
  onLayoutRootView: () => void;
}
interface AppSplashProps extends AppSplashCommonProps {}

// NOTE:
// Keep the splash screen visible while we do startup work.
// It is recommended to call this in global scope without awaiting,
// rather than inside React components or hooks, because otherwise
// this might be called too late, when the splash screen is already hidden.
SplashScreen.preventAutoHideAsync();

// Component: Presentation
export const AppSplashUi = ({
  isAppReady,
  onLayoutRootView,
}: AppSplashUiProps): React.ReactElement | null => {
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
export const AppSplash = ({}: AppSplashProps): React.ReactElement => {
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
    if (areFontsLoaded) {
      setIsAppReady(true);
    }
  }, [areFontsLoaded]);

  return (
    <AppSplashUi isAppReady={isAppReady} onLayoutRootView={onLayoutRootView} />
  );
};

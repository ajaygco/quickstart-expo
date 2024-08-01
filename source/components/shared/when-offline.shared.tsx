// Modules
import * as React from "react";
import { useIsConnected } from "react-native-offline";

// Types
interface WhenOfflineCommonProps {
  children: React.ReactElement;
}
export interface WhenOfflineUiProps extends WhenOfflineCommonProps {
  isConnected: boolean | null;
}
export interface WhenOfflineProps extends WhenOfflineCommonProps {}

// Component: Presentation
export const WhenOfflineUi = ({
  children,
  isConnected,
}: WhenOfflineUiProps): React.ReactElement | null => {
  if (isConnected) {
    return null;
  }

  return children;
};

// Component: Logic
export const WhenOffline = (props: WhenOfflineProps): React.ReactElement => {
  // Hooks
  const isDeviceConnected: boolean | null = useIsConnected();

  return <WhenOfflineUi isConnected={isDeviceConnected} {...props} />;
};

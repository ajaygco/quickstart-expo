// Modules
import * as React from "react";
import { useIsConnected } from "react-native-offline";

// Types
interface WhenOnlineCommonProps {
  children: React.ReactElement;
}
export interface WhenOnlineUiProps extends WhenOnlineCommonProps {
  isConnected: boolean | null;
}
export interface WhenOnlineProps extends WhenOnlineCommonProps {}

// Component: Presentation
export const WhenOnlineUi = ({
  children,
  isConnected,
}: WhenOnlineUiProps): React.ReactElement | null => {
  if (isConnected) {
    return children;
  }

  return null;
};

// Component: Logic
export const WhenOnline = (props: WhenOnlineProps): React.ReactElement => {
  // Hooks
  const isDeviceConnected: boolean | null = useIsConnected();

  return <WhenOnlineUi isConnected={isDeviceConnected} {...props} />;
};

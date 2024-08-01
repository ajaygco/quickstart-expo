// Modules
import * as React from "react";
import { useIsConnected } from "react-native-offline";

// Types
interface WhenOfflineProps {
  children: React.ReactElement;
}

// Component
export const WhenOffline = ({
  children,
}: WhenOfflineProps): React.ReactElement | null => {
  // Hooks
  const isDeviceConnected: boolean | null = useIsConnected();

  if (isDeviceConnected) {
    return null;
  }

  return children;
};

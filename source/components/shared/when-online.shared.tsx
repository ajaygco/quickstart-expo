// Modules
import * as React from "react";
import { useIsConnected } from "react-native-offline";

// Types
interface WhenOnlineProps {
  children: React.ReactElement;
}

// Component
export const WhenOnline = ({
  children,
}: WhenOnlineProps): React.ReactElement | null => {
  // Hooks
  const isDeviceConnected: boolean | null = useIsConnected();

  if (isDeviceConnected) {
    return children;
  }

  return null;
};

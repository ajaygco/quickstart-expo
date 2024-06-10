// Modules
import React from "react";
import { useIsConnected } from "react-native-offline";

// Component: Presentation
export const WhenOfflineUi = ({ isConnected, children }) => {
  if (isConnected) {
    return;
  }

  return children;
};

// Component: Logic
export const WhenOffline = ({ ...props }) => {
  // Hooks
  const isDeviceConnected = useIsConnected();

  return <WhenOfflineUi isConnected={isDeviceConnected} {...props} />;
};

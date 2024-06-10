// Modules
import React from "react";
import { useIsConnected } from "react-native-offline";

// Component: Presentation
export const WhenOnlineUi = ({ isConnected, children }) => {
  if (!isConnected) {
    return;
  }

  return children;
};

// Component: Logic
export const WhenOnline = (props) => {
  const isConnected = useIsConnected();

  return <WhenOnlineUi isConnected={isConnected} {...props} />;
};

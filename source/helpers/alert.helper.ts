// Modules
import * as Haptics from "expo-haptics";
import { Alert as RnAlert } from "react-native";
import type { AlertButton, AlertOptions } from "react-native";

// Helpers
import { captureException } from "@app/helpers/analytics.helper";

// Types
export interface AlertBase {
  title: string;
  message: string;
  buttons?: AlertButton[];
  options?: AlertOptions;
}

// Consturctor: Alert
const _alert = (config: AlertBase): void => {
  RnAlert.alert(config.title, config.message, config.buttons, config.options);
};

// Consturctor: Error
const _error = async (config: AlertBase): Promise<void> => {
  try {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
  } catch (error) {
    captureException(error as Error);
  } finally {
    _alert(config);
  }
};

// Consturctor: Warning
const _warning = async (config: AlertBase): Promise<void> => {
  try {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
  } catch (error) {
    captureException(error as Error);
  } finally {
    _alert(config);
  }
};

// Consturctor: Success
const _success = async (config: AlertBase): Promise<void> => {
  try {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  } catch (error) {
    captureException(error as Error);
  } finally {
    _alert(config);
  }
};

// Exports
export const Alert: {
  error: typeof _error;
  warning: typeof _warning;
  success: typeof _success;
} = {
  error: _error,
  warning: _warning,
  success: _success,
};

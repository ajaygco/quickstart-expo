// Modules
import * as Haptics from "expo-haptics";
import { Alert as RnAlert } from "react-native";

// Helpers
import { captureException } from "helpers/analytics.helper";

// Consturctor: Alert
const _alert = ({ title, message, buttons = [], options = {} }) => {
  const alertButtons = buttons.map(({ text, onPress, ...props }) => {
    return { text, onPress, ...props };
  });

  RnAlert.alert(title, message, alertButtons, options);
};

// Consturctor: Error
const _error = async (...args) => {
  try {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
  } catch (error) {
    captureException(error);
  } finally {
    _alert(...args);
  }
};

// Consturctor: Warning
const _warning = async (...args) => {
  try {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
  } catch (error) {
    captureException(error);
  } finally {
    _alert(...args);
  }
};

// Consturctor: Success
const _success = async (...args) => {
  try {
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  } catch (error) {
    captureException(error);
  } finally {
    _alert(...args);
  }
};

// Exports
export const Alert = {
  error: _error,
  warning: _warning,
  success: _success,
};

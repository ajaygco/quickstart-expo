// Modules
import { LogBox } from "react-native";
import { registerRootComponent } from "expo";

// Components
import { AppSplash } from "components/app-splash";

const ignoreLogs = [
  // Add strings that need to be ignored
];

// Ignore Warnings
LogBox.ignoreLogs();

// LogBox - Without Ignored
const withoutIgnored = (logger) => {
  return (...args) => {
    if (!ignoreLogs.some((log) => args.join(" ").includes(log))) {
      logger(...args);
    }
  };
};

if (__DEV__) {
  // eslint-disable-next-line no-console
  console.log = withoutIgnored(console.log);

  // eslint-disable-next-line no-console
  console.info = withoutIgnored(console.info);

  // eslint-disable-next-line no-console
  console.warn = withoutIgnored(console.warn);

  // eslint-disable-next-line no-console
  console.error = withoutIgnored(console.error);
}

// Exports
export default registerRootComponent(AppSplash);

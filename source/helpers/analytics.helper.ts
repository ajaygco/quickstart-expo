// Modules
// Import analytics library here!

// Capture Exception
export const captureException = (error: Error): void => {
  if (__DEV__) {
    // eslint-disable-next-line no-console
    return console.log(error);
  }
};

// Log
export const log = (message: string): void => {
  if (__DEV__) {
    // eslint-disable-next-line no-console
    return console.log(message);
  }
};

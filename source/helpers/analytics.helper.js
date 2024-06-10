// Modules
// Import analytics library here!

// Capture Exception
export const captureException = (error) => {
  if (__DEV__) {
    // eslint-disable-next-line no-console
    return console.log(error);
  }

  // Statements
};

// Log
export const log = (message) => {
  if (__DEV__) {
    // eslint-disable-next-line no-console
    return console.log(message);
  }

  // Statements
};

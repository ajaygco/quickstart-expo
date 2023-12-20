module.exports = {
  preset: "jest-expo",
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "clover", "html"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
};

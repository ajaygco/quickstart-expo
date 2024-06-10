// yarn test source/common/__tests__/utils.common.test.js

import {
  getUtcTimestamp,
  getExtendedUtcTimestamp,
  formatTimestampAsTime,
} from "common/utils.common";

describe("utils.common", () => {
  describe("getUtcTimestamp", () => {
    it("should return a number", () => {
      expect(typeof getUtcTimestamp()).toBe("number");
    });
  });

  describe("getExtendedUtcTimestamp", () => {
    it("should return a number", () => {
      expect(typeof getExtendedUtcTimestamp({ extendByMs: 1000 })).toBe(
        "number",
      );
    });
  });

  describe("formatTimestampAsTime", () => {
    it("should return a string", () => {
      expect(typeof formatTimestampAsTime(1626100000000)).toBe("string");
    });
  });
});

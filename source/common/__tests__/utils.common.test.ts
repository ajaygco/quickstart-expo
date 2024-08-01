// bun run test source/common/__tests__/utils.common.test.ts

import { getUtcTimestamp } from "@app/common/utils.common";

describe("utils.common", () => {
  describe("getUtcTimestamp", () => {
    it("should return a number", () => {
      expect(typeof getUtcTimestamp()).toBe("number");
    });
  });
});

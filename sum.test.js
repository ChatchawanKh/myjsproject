const sum = require("./sum");

test("Adds 1 + 2 to equal 3", () => {
  expext(sum(1, 2)).toBe(3);
});

const calculater = require("./calculator");

test("Calculates (1+2) * 3 / to equal 4.5", () => {
  expect(calculater(1, 2, 3)).toBe(4.5);
});

const { sum, multiply, divide } = require("./math");

test("Adds 1+2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("multiplies 2*3 to equal 6", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("divide 6/2 to equal 3", () => {
  expect(multiply(6, 2)).toBe(3);
});

test("divide by zero", () => {
  expect(() => multiply(1, 0)).toThrow("Cant divide by zero");
});

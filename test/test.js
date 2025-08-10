const { addition, subtraction } = require("../operations");

test("correct addition", () => {
  expect(addition(2, 3)).toBe(5);
});

test("correct subtraction", () => {
  expect(subtraction(5, 2)).toBe(3);
});

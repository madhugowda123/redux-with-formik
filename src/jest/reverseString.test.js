import reverseString from "./reverseString";

test("Check the reverseString method exists", () => {
  expect(reverseString).toBeDefined();
});

test("checking the reveseing string working", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

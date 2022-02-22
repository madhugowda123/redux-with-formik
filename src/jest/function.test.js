import MyFunction from "./function";

//toBe for premitive datatype toEqual is for non-premitive datatypes
//check for add number useing toBe()
test("adds 1 + 2 to equal 3", () => {
  expect(MyFunction.add(1, 2)).toBe(3);
});
//check for not equal add number useing not.toBe()

test("add 2 + 2 not equal to 5", () => {
  expect(MyFunction.add(2, 2)).not.toBe(5);
});

//check for truthy and falsy values

//toBeTruthy matches anything that an if statement  treats as true
test("check for truthy", () => {
  expect(MyFunction.checkValue(3)).toBeTruthy();
});

//toBeFalsy matches anything that an if statement  treats as false
test("check for falsy", () => {
  expect(MyFunction.checkValue(null)).toBeFalsy();
});

//toBeNull matches only null
test("should be null", () => {
  expect(MyFunction.isNull()).toBeNull();
});

//toBeUndefined matches only undefine
//toBeDefined oppsite to undefine

//toBe for premitive datatype toEqual is for non-premitive datatypes
//toEqual matches for array/objects
test("should test for first and last name should be object", () => {
  expect(MyFunction.createUser()).toEqual({
    firstname: "Madhu",
    lastname: "Gowda",
  });
});

//Lesserthan and Greaterthan

test("should be less than 1600", () => {
  const num1 = 600;
  const num2 = 1000;
  expect(num1 + num2).toBeLessThanOrEqual(1600);
});

//toMatch for check letters and regual expression
test("to check i in team", () => {
  expect("teami").not.toMatch(/I/);
});

//toContain to find values in array
test("should find admin in array", () => {
  const userValues = ["madhu", "manu", "malli"];
  expect(userValues).toContain("madhu");
});

//Working with async data
test("User name should be Leanne Graham", () => {
  const data = MyFunction.fetchUser();
  expect(data).toEqual();
});

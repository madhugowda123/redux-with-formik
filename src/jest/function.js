import axios from "axios";

const MyFunction = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstname: "Madhu" };
    user["lastname"] = "Gowda";
    return user;
  },
  fetchUser: () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => "error");
  },
};
export default MyFunction;

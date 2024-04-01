/*
Example 1:

Input: nums = [[1,2],[3,4]], operation = "Add"
Output: 10
Explanation:
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
obj1 + obj2; // 10
*/

const wrapper = (arr, ope) => {
  let val = arr.flat();

  if (ope.toLowerCase() === "add") {
    return val.reduce((acc, red) => {
      return acc + red;
    }, 0);
  } else if (ope.toLowerCase() === "string") {
    return val.toString();
  }
};

console.log(
  wrapper(
    [
      [1, 2],
      [3, 4],
    ],
    "string"
  )
);

console.log(
  wrapper(
    [
      [1, 2],
      [3, 4],
    ],
    "add"
  )
);



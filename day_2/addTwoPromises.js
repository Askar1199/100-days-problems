/*              -- add two promises --
Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 

Example 1:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
Output: 7
Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
Example 2:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
Output: -2
Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.
*/

//  code --

var addTwoPromises = async function (promise1, promise2) {
// step 1
    // try {
    //     const [val1,val2]=Promise.all([promise1,promise2])
    //     return val1+val2
    // }
    // catch(err){
    //     console.log(err)
    //     throw err
    // }


    // step 2
    let val1=await promise1
    let val2 =await promise2

    return val1+val2
};

const ex1=new Promise(resolve => setTimeout(() => resolve(2), 20))
const ex2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

console.log(addTwoPromises(ex1,ex2))
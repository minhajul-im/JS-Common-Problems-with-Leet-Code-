/**
 * Problem - 1
ত োমাকে একটা ফাংশন লি খতে হবে যার নাম হবে sortMaker()। এই ফাংশনে র parameter হবে একটি array এবং
এই array তে সবসময় দইুটি উপাদান থাকবে ।
Task:
1. যদি অ্যারের দইুটি উপাদান পজি টিভ সংখ্যা হয় সে ক্ষে ত্রে তুমি অ্যারে টিকে বড় ো থে কে ছ োট ক্রমে সাজি য়ে রি টার্ন
করবে ।
2. যদি দইুটি উপাদান একই হয় সে ক্ষে ত্রে তুমি এই স্ট্রি ং রি টার্ন করবে ঃ “equal”
3. Bonus: যদি অ্যারে র যে ক োন ো একটি উপাদান নে গে টিভ সংখ্যা হয় সে ক্ষে ত্রে তুমি রি টার্ন করবে “Invalid
Input”
Sample Input Sample Output
[2,3] [3,2]
[4,2] [4,2]
[4,4] equal
[1,2] [2,1]
[4,-2] Invalid Input
বি .দ্র.: 0 কে স্কি প করতে পারে ন। মানে [0,1] এইভাবে থাকলে আপনি [1,0] দি য়ে রি টার্ন করতে পারে ন। আমরা চে ক
করার সময় এমন ইনপুট দি য়ে চে ক করব ো না।
Function definition
function sortMaker(arr) {
}
*/

const shortMaker = (arr) => {
  let length = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      length--;
    } else {
      return "invalid input!";
    }
  }

  if (length === 0) {
    //when we don't know how many numbers here, then we'll use loop! but we already know this condition😁
    if (arr.at(0) === arr.at(1)) {
      return "equal!";
    } else {
      //bubble sort or simply built-in methods we can use both.

      // bubble sort
      for (let i = 0; arr.length > i; i++) {
        for (let j = i; arr.length > j; j++) {
          if (arr[j] > arr[i]) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
          }
        }
      }

      //built-in methods
      return arr.sort().reverse();
    }
  }
  //when you use bubble sort otherwise no need 'return'
  return arr;
};

const arr = [1, -3];
console.log(shortMaker(arr));

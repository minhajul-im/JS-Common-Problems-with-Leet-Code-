// 1. reverse string
const string = "this is javascript";
const reverseStr = (str) => str.split(" ").reverse().join(" ");

// 2. remove vowel in string
const vowelStr = "hello  come to the point";
const removeVowel = (str) => str.replace(/[aeiou]/g, "");

// 4. remove all symbols in string
const remove = (s) => s.replace(/[!()'"]/g, "").concat("!");

// 5. Number to String
const numberToString = (num) => num.toString();

// 6.String to Number
const stringToNumber = (str) => parseInt(str);

// 7. Remove First and Last Character
const removeChar = (str) => str.slice(1, -1);
const removeChar2 = (str) => str.substring(1, str.length - 1);

// 8. Template String
const templeStrings = (obj, feature) => `${obj} ${feature}`;

// 9. Reverse String
const reverseString = (str) => {
  const string = str.split("");
  return string.reverse().join("");
};

// last character full stop or not,
const str1 = "hello minhajul";
const str2 = "hello islam.";

const y =
  str1.length < 10 && str1[str1.length - 1] === "." ? str1 : str1 + ".....";
const x = str2.length > 5 && str2[str2.length - 1] === "." ? str2 : str2 + ".";

console.log(y);
console.log(x);

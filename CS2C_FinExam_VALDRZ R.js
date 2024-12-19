function checkPalindrome() {
  let str1 = prompt("Enter the first string:");
  let str2 = prompt("Enter the second string:");

  let reversedStr1 = str1.split("").reverse().join("");
  let reversedStr2 = str2.split("").reverse().join("");

  console.log("Original string 1:", str1);
  console.log("Reversed string 1:", reversedStr1);
  console.log("Original string 2:", str2);
  console.log("Reversed string 2:", reversedStr2);

  return str1 === reversedStr1 && str2 === reversedStr2;
}

let result = checkPalindrome();
console.log("Are both strings palindromes?", result);

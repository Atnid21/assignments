/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  
  let cleanStr = str.toLowerCase().replace(/[.,?!\s]/g, "");

  let start=0,end=cleanStr.length-1;

  while(start<=end){
    if(cleanStr[start]!=cleanStr[end])
      return false;
    start++;
    end--;
  }

  return true;
}

module.exports = isPalindrome;

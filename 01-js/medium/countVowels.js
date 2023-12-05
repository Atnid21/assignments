/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let counter=0;

    let cleanStr=str.toLowerCase();
    
    for(let i=0;i<str.length;++i){
      if(cleanStr[i]==='a' || cleanStr[i]==='e' || cleanStr[i]==='i' || cleanStr[i]==='o' || cleanStr[i]==='u'){
          counter++;
      }
    }

    return counter;

}

module.exports = countVowels;
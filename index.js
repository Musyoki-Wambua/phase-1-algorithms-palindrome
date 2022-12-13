function isPalindrome(word) {
  // Write your algorithm here

  //converting word to its reversed state
  const wordReverse = word.split("").reverse().join("").toLowerCase()

  //comparing if received word and previous word are alike then returning true or false
  if (wordReverse.toLowerCase() === word) {
    return true;
  }else{
    return false;
  }

}

/* 
  Add your pseudocode here
  Assign a variable, then check if the word is equal to its reversed state,
    all in lowercase.
  If the word is same;
      return true
  if word is not the same, return false
*/


/*
  Add written explanation of your solution here
  1. Convert the string to its reverse word
  2. Make all be of the same case, lowercase.
  3. Check if conditions are true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

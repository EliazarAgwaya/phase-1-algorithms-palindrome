function isPalindrome(word) {
  // Write your algorithm here
  let arr=word.split("")
    for(let i=0; i<arr.length; i++){
        if(arr[i]===arr[arr.length-1]){
            return true
        }
        else{
            return false
        }
    }
}
console.log(isPalindrome("mom"))
/* 
  Add your pseudocode here
  Create a function isPalindrome with a string as an argument
  Call the split() method on the string to return an array of single letters forming the string and store the array in a variable called arr
  Iterate through each letters in the array checking if an element at an index, say at [0] is equal to one at the end arr[arr.length-1]
  Return true if they are true and false otherwise
*/

/*
  Add written explanation of your solution here
  I've called the split method on my argument to return an array of individual letters forming the string
  Then I've done iteration through the elements of the array checking if the element at [0] is equal to element at [arr.length-1]
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

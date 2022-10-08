/**
 *
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 *
 *
 *
 * Example 1:
 *
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 */

var canConstruct = function (ransomNote, magazine) {
  let ransom = ransomNote.split("");
  let letters = magazine.split("");

  while (ransom.length !== 0) {
    if (letters.includes(ransom[0])) {
      let index = letters.indexOf(ransom[0]);

      ransom.shift();
      letters.splice(index, 1);
    } else {
      return false;
    }
  }
  return true;
};

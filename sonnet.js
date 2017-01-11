// 1. Place the contents of the div in a variable
var sonnet = document.getElementById("sonnet").innerHTML;
console.log(sonnet);

// 2. Find and output the starting position of the word "orphans"
var orphansPosition = sonnet.search("orphans");
console.log(orphansPosition);

// 3. Output the number of characters in the sonnet
var characters = sonnet.length;
console.log(characters);

// 4. Replace the first occurrence of the string "winter" with "yuletide"
var replaceWinter = sonnet.replace("winter", "yuletide");
console.log(replaceWinter);

// 5. Replace all occurrences of the string "the" with "a large"
var replaceThe = sonnet.replace(/the/g, "a large");
console.log(replaceThe);

// 6. Set the content of the sonnet div with the new string

document.getElementById("sonnet").innerHTML = replaceThe;
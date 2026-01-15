let targetString = "Wonderful, Joyful, Happiness, Time, Task, Apple";
let regex = /\b[^aA\s]{6,}\b/g;
let match = targetString.match(regex);

console.log(regex.test(targetString)); // true, we have matches
console.log(match); // 'Wonderful, Joyful' only (words with 6 or more letters without 'a' or 'A')
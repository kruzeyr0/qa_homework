// Task 1. 'number' + 3 + 3
// 'number' + 3 = string + number = concatenation
// 'number3' + 3 = concatenation
let task_1 = 'number' + 3 + 3;
console.log(task_1); // 'number33'


// Task 2. null + 3
// null = 0
// 0 + 3 = 3
let task_2 = null + 3;
console.log(task_2); // 3


// Task 3. 5 && "qwerty"
// 5 is true
// && returns last true when no false found
let task_3 = 5 && "qwerty";
console.log(task_3); // 'qwerty'


// Task 4. +'40' + +'2' + "hillel"
// string +'40' = num 40 
// string +'2' = num 2 
// 40 + 2 = num 42 
// 42 + 'hillel' = string
let task_4 = +'40' + +'2' + "hillel";
console.log(task_4); // '42hillel'


// Task 5. '10' - 5 === 6
// 10 - 5 = 5 (10 and 5 are converted to numbers)
// 5 === 6 = false
let task_5 = '10' - 5 === 6;
console.log(task_5); // false


// Task 6. true + false
// true = 1
// false = 0
// 1 + 0 = 1 (+ operator converts boolean to number)
let task_6 = true + false;
console.log(task_6); // 1


// Task 7. '4px' - 3
// '4px' = NaN
// NaN - 3 = NaN
let task_7 = '4px' - 3;
console.log(task_7); // NaN


// Task 8. '4' - 3
// '4' = 4
// 4 - 3 = 1 (- operator converts string to number)
let task_8 = '4' - 3;
console.log(task_8); // 1


// Task 9. '6' + 3 ** 0
// 3 ** 0 = 1 (any number to the power of 0 = 1)
// '6' + 1 = 61 (string + number = concatenation)
let task_9 = '6' + 3 ** 0;
console.log(task_9); // '61' as string


// Task 10. 12 / '6'
// '6' = 6
// 12 / 6 = 2 (/ operator converts string to number)
let task_10 = 12 / '6';
console.log(task_10); // 2


// Task 11. '10' + (5 === 6)
// 5 === 6 = false
// '10' + false = '10false' (string + boolean = string concatenation)
let task_11 = '10' + (5 === 6);
console.log(task_11); // '10false'


// Task 12. null == ''
// null compared to undefined equals false
let task_12 = null == '';
console.log(task_12); // false


// Task 13. 3 ** (9 / 3)
// 9 / 3 = 3 (first calculate inside parentheses)
// 3 ** 3 = 27
let task_13 = 3 ** (9 / 3);
console.log(task_13); // 27


// Task 14. !!'false' == !!'true'
// !!'false' = true (any non-empty string is true)
// !!'true' = true
// true == true = true (two booleans true compared return true)
let task_14 = !!'false' == !!'true';
console.log(task_14); // true


// Task 15. 0 || '0' && 1
// '0' = true
// '0' && 1 = 1 (both true, returns last true (or first false) and && operator has higher precedence than ||)
// 0 || 1 = 1 (0 is false, || returns first true)
let task_15 = 0 || '0' && 1;
console.log(task_15); // 1


// Task 16. (+null == false) < 1
// +null = 0 (+ converts null to number)
// 0 == false = true
// true = 1
// 1 < 1 = false
let task_16 = (+null == false) < 1;
console.log(task_16); // false


// Task 17. false && true || true
// false && true = false (returns first false)
// false || true = true (returns first true)
const task_17 = false && true || true;
console.log(task_17); // true


// Task 18. false && (false || true)
// false || true = true (returns first true and () has higher precedence)
// false && true = false (returns first false)
let task_18 = false && (false || true);
console.log(task_18); // false


// Task 19. (+null == false) < 1 ** 5
// +null = 0 (+ converts null to number)
// 0 == false = true
// true = 1
// 1 ** 5 = 1
// 1 < 1 = false
let task_19 = (+null == false) < 1 ** 5;
console.log(task_19); // false
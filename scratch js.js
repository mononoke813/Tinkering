
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// if a number is divisible by 3 add them up
// if a number is divisible by 5 add them up
// do not count a number divisible by 3 & 5 twice
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// if given the number 20 = 4, 5 should be added together
// if the number is 30 = 3, 5, 6, 10 should be added together

// Note: If the number is a multiple of both 3 and 5, only count it once.
//
// function solution(number){
//     const multiple3 = number / 3;
//     const noRemain3 = number % 3 === 0;
//     const multiple5 = number / 5;
//     const noRemain5 = number % 5 === 0;
//     if(number <= 0) {
//         return 0;
//     }
//     if((multiple3 || multiple5) && noRemain3 && noRemain5) {
//         return multiple5 + multiple3;
//     }
//     if(number = noRemain3) {
//         return multiple3 + 3;
//     }
//     if(number = noRemain5) {
//         return multiple5 + 5;
//     }
// }
//
// console.log(solution(30));
// ----------------------------------------
    // To pass the test, a student cannot accumulate more than 18 demerit points.
    //
    // F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.
    //
    // Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.
// function passed (list) {

//}
// console.log(passed([10,10,10,18,20,20]));

//------------------------------------------
// Exercise 1)
//
// Get the sum of two arrays…actually the sum of all their elements.
//     P.S. Each array includes only integer numbers. Output is a number too.// Example output:
// // 276 + 351 = 627

// USING WHILE LOOP
// let i1 = 0;
// let i2 = 0;
// let sum1 = 0;
// let sum2 = 0;
//
// while(i1 < arr_1.length) {
//     sum1 += arr_1[i1];
//     i1++;
// }
// while(i2 < arr_2.length) {
//     sum2 += arr_2[i2];
//     i2++;
// }
//
// const final = sum1 + sum2;
// console.log(final);
// const arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
// const arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
//
//
// // USING FOR OF LOOP
// let sum1 = 0;
// let sum2 = 0;
//
// for(let arr1 of arr_1) {
//     sum1 += arr1;
// }
//
// for(let arr2 of arr_2) {
//     sum2 += arr2;
// }
// let total = sum1 + sum2;
// console.log(total);
//-----------------------------------
// Exercise 2)
//
// Using a for loop print all even numbers up to and including n. Don’t include 0.
//
let n1 = 22;

for(let i = 2; i <= n1; i += 2){
            console.log(i);

}
// // Example output:
// // 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
//----------------------------------------
// Exercise 3)
//
// Using a for loop output the elements in reverse order
//
// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// // Example output:
// // true 3.5  be  false cannot  true 9 what 43 OR each item on a new line
//----------------------------------------
// Exercise 4)
//
// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.
//
//
//     let arr_3   = [4, 6, 7];
// let arr_4    = [8, 1, 9];
// // Example output:
// // [12, 7, 16]
//----------------------------------------
// Exercise 5)
//
// Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.
//
//     let str1 = "javascript";
// // Example output:
// // jZvZsZrZpZ OR each letter on a new line
// // HINT: You can use  if((i+1) % 2 == 0) to check for even indexes
//----------------------------------------
// Exercise 6)
//
// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
//
//     let str2 = "don’t know why";
// // Example output:
// // “yes”
//----------------------------------------
// Exercise 7)
//
// Given a number n Calculate the factorial of the number
//
// let n2 = 4; //  4 * 3 * 2 * 1 = 24
// // Example output:
// // 24
//----------------------------------------
// Exercise 8)
//
// Write a program that will allow someone to guess a four digit pin exactly 4
// times. If the user guesses the number correctly. It prints “That was
// correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.
//
//     let pin = 0704;
// // Example output:
// // Please make your guess:
// // 4544
// // Sorry that was wrong.
// // Please make your guess:
// // 4444
// // Sorry that was wrong.
// // Please make your guess:
// // 0704
// // That was correct!
//----------------------------------------
// Exercise 9)
//
// Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
//     Palindrome: a word, phrase, or sequence that reads the same backward as
// forward, e.g., madam or nurses run.
//
//     let str3 = "racecar";
// let str4 = "Java";
// // Example output:
// // string1 palindrome?:
// // Yes
// // string2 palindrome?:
// // No
//----------------------------------------
// Exercise 10)
//
// This is a code wars kata. click here to train on “Grasshopper – Summation” on
// code wars. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//
// let num1 = 2;
// let num2 = 8;
// // Example output:
// // 1 + 2 = 3
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36
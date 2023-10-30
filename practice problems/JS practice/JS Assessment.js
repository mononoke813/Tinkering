const isANumber = (input) => {
    if(typeof input !== "number") {
        return false;
    }

    return true;  //happy path gives you all "true" in this case
}

const increment = (input) => {
    input = parseFloat(input);
    if(typeof input !== "number" //or use isNan(input) {
        return false;
    }
    return input + 1;  //happy path gives us what the func is INHERENTLY SUPPOSED TO DO
}

const decrement = (input) => {
    input = parseFloat(input);
    if(typeof input !== "number" //or use isNan(input) {
        return false;
}
    return input - 1;
}

const getHighestNumber = (input1, input2, input3) => {
    if(isNaN(input1, input2, input3)) {   // if this doesn't work, then separate individually and use ||
        return false;
    }
    const highestNum = Math.max(input1, input2, input3);
    return highestNum;
}

const parseNumber = (num) => {
    if(isNaN(num)) {
        return false;
    }
    return parseNumber(num);
}

const add = (input1, input2) => {
    if(isNaN(input1) || isNaN(input2)) {
        return false;
    } else {
        return parseInt(input1 + input2);
    }
}

const multiply = (input1, input2) => {
    if(isNaN(input1) || isNaN(input2)) {
        return false;
    } else {
        return parseInt(input1 * input2);
    }
}

const square = (input1, input2) => {
    if(isNaN(input1) || isNaN(input2)) {
        return false;
    } else {
        return parseInt(input1 ** 2);
    }
}

const sumOfSquares = (input1, input2) => {
    if(isNaN(input1) || isNaN(input2)) {
        return false;
    } else {
        return (input1 ** 2 + input ** 2);
    }
}

const isPalindrome = (input) => {
    if(typeof input !== "string") {
        return false;
    }

    inputArr = input.split("");   // this takes the input that's a string and makes it an array
    inputArrReversed = inputArr.reverse();
    inputReversed = inputArrReversed.join("");
    return input.toLowerCase() === inputReversed.toLowerCase();
}


// const isPalindrome = (input) => {
//     if (typeof input === "string") {
//         let inputToLower = input.toLowerCase();
//         let inputSplit = inputToLower.split("");
//         let inputReverse = inputSplit.reverse();
//         let inputJoin = inputReverse.join("");
//         return inputJoin;
//     }
//
// }
// const testing = isPalindrome("Morgan");
// console.log(testing);


// const isNotPalindrome = (input) => {
//     if (typeof input !== "string") {
//         return true;
//     }
//     if (typeof input === "string") {
//         let isPalindrome = input.split("").reverse().join("");
//         if(input === isPalindrome) {
//             return false;
//         }
//         return true;
//     }
// }
//
// const testing = isNotPalindrome();
// console.log("Racecar");

// const convertHourToSec = (Hours) => {
//     if(!isNaN(Hours) && Hours >= 0) {
//         let totalSeconds = parseFloat(Hours * 3600);
//         return totalSeconds;
//     }
//     if(typeof Hours !== "number" || Hours < 0 || typeof Hours === 'string') {
//         return false;
//     }
// }
// const testing = convertHourToSec("2");
// console.log(testing);
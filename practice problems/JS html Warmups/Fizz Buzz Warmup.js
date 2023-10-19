



const fizzBuzz = (start, end) => {
    for (let i = start; i < end; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} is divisible by 3 and 5! FizzBuzz`);

        } else if (i % 3 === 0) {
            console.log(`${i} this number is divisible by 3! Fizz`);

        } else if (i % 5 === 0) {
            console.log(`${i} this number is divisible by 5! Buzz`);

        } else {
            console.log(`${i} this number is just not.`);
        }
    }
}

fizzBuzz(1, 100);

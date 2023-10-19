



const fizzBuzz = (start, end) => {
    start = parseFloat(start);             //Jason flair...
    end = parseFloat(end);                 //add-on for... 
    if (isNaN(start) || isNaN(end)) {      //interview example...
        return false;                      //to showcase what I know...
    }                                      //and have learned
    
    for (let i = start; i <= end; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} FizzBuzz`);

        } else if (i % 3 === 0) {
            console.log(`${i} Fizz`);

        } else if (i % 5 === 0) {
            console.log(`${i} Buzz`);

        } else {
            console.log(`${i}`);
        }
    }
}

fizzBuzz(1, 100);

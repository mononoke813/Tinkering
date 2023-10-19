



const fizzBuzz = (start, end) => {
    
    if(typeof start === "boolean" || typeof end === "boolean") {
        return false;
    }
    start = parseFloat(start);             //Jason flair...
    end = parseFloat(end);                 //add-on for... 
    if (isNaN(start) || isNaN(end)) {      //interview example...
        return false;                      //to showcase what I know...
    }                                      //and have learned

    if(parseInt(start) !== start || parseInt(end) !== end) {
        return false;
    }
    
    for (let i = start; i <= end; i++) {

        if (i % 3 === 0 && i % 5 === 0) {    //*ahem* this could also be (i % 15 === 0)
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

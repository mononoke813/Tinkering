//split the numbers into strings(?)
function digitalBoot(n) {
    let numArray = n.toString().split("");
    let result;

    while (numArr.length > 1) {
        result = 0;
        for(let number of numArr) {
            result += parseFloat(number);
        }
        numArray = result.toString().split("");
    }
    result = parseFloat(numArray.join(""));
    return result;
}
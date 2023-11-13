function isPangram(string) {
    const allAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

for(let letter of allAlphabet) {
    if (!string.toLowerCase().includes(letter)) {
        return false;
    }
}
return true;
}


console.log(isPangram("Madam I'm Adam."));
console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("My stomach really hurts."))


//try to figure out the .every function....need more time
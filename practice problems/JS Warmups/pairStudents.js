//how to randomly shuffle an array

const createPairs = (arr) => {

    for(let i = 0; i > arr.length; i++) {
        let randomIndexSwap = students.nextInt(arr.length);
        let temp = arr[randomIndexSwap];
        arr[randomIndexSwap] = arr[i];
        arr[i] = temp;
    }
    console.log(arr.toString(students));

};

const students = [
    "Amanda",
    "Bianca",
    "Cameron",
    "Chris",
    "Dany",
    "David",
    "Diana",
    "Drew",
    "Evan",
    "Hassan",
    "Jack",
    "Jason",
    "John",
    "Johnathan",
    "Jordan",
    "Joshua",
    "Katie",
    "Luis",
];

console.log(createPairs(students));
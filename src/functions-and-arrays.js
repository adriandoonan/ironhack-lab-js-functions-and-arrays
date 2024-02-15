// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    return num1 >= num2 ? num1 : num2
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWords) {
    if (arrayOfWords.length === 0) return 0
    let longestWord = ''
    for (const word of arrayOfWords) {
        if (word.length > longestWord.length) longestWord = word
    }
    return longestWord
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
    return arrayOfNumbers.reduce((a,b) => a + b, 0)
}


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {
    if (arrayOfNumbers.length === 0) return 0
    return sumNumbers(arrayOfNumbers) / arrayOfNumbers.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, searchString) {
    if (arrayOfWords.length === 0) return null
    return arrayOfWords.some((word) => word === searchString)
}

doesWordExist(words2,'subdset')
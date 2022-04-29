const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let j = 0
firstFor: for (let i = 0; i < numbers.length; i++) {
    for (j = 0; j < numbers.length; j++) {
        console.log(numbers[i], numbers[j])
        if (numbers[i] > numbers[j]) {
            break firstFor
        }
    }
}
const numbers = [18, 52, 35, 47, 15, 11, 13, 156, 599]

let sum = 0

for (number of numbers) {
    if (number % 2 == 1) {
        sum += number
    }
}

console.log(`sum of odd numbers is ${sum}`)
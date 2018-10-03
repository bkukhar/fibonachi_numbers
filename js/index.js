//Clients Number
const clientsNumber = parseInt(prompt('Eter the Fibonacci number '));

//(first type) First method - Array 
function fibonacciFirstArray(clientsNumber) {
    let fibonacciNumbers = [1, 1];
    for (let i = 2; i < clientsNumber; i++) {
        fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]);
    }
    if (clientsNumber < 1) {
        return 0;
    }
    return fibonacciNumbers.pop();
}
alert('The first array method result is ' + fibonacciFirstArray(clientsNumber));


//(second type) First method - Array 
function fibonacciSecondArray(clientsNumber) {
    let fibonacciNumbers = [1, 0];
    let i = 0;
    while (i < clientsNumber) {
        fibonacciNumbers.push(fibonacciNumbers[0] + fibonacciNumbers[1]);
        fibonacciNumbers.shift();
        i++;
    }
    return fibonacciNumbers.pop();
}
alert('The second array method result is ' + fibonacciSecondArray(clientsNumber));


//Second method - Recursion
function fibonacciRecursion(clientsNumber) {
    if (clientsNumber === 0) return 0;
    if (clientsNumber === 1) return 1;
    return fibonacciRecursion(clientsNumber - 1) + fibonacciRecursion(clientsNumber - 2);
}
alert('Recursion method result is ' + fibonacciRecursion(clientsNumber));


//Third method - Cycle
function fibonacciCycle(clientsNumber) {
    let firstValue = 0;
    let secondValue = 1;
    let currentValue = 0;
    for (let i = 0; i <= clientsNumber; i++) {
        currentValue += firstValue;
        firstValue = secondValue;
        secondValue = currentValue;
    }
    return currentValue;
}
alert('Cycle method result is ' + fibonacciCycle(clientsNumber));

//Print results
function print(val) {
    document.write(val + '<br>');
}

print('1. First array method: ' + fibonacciFirstArray(clientsNumber));
print('2. Second array method: ' + fibonacciSecondArray(clientsNumber));
print('3. Recursion method: ' + fibonacciRecursion(clientsNumber));
print('4. Cycle method: ' + fibonacciCycle(clientsNumber));

//Other similar Array options

// function fibonacciFirstArray(clientsNumber) {
//     let fibonacciNumbers = [1, 0];
//     let nextValue = 0;
//     for (let i = 0; i < clientsNumber; i++) {
//         nextValue = fibonacciNumbers[i] + fibonacciNumbers[i + 1];
//         fibonacciNumbers.push(nextValue);
//     }
//     return nextValue;
// }
// alert('The first array method result is ' + fibonacciFirstArray(clientsNumber));

// function fibonacciFirstArray(clientsNumber) {
//     let fibonacciNumbers = [1, 0];
//     let fibonacciArray = [];
//     for (let i = 0; i < clientsNumber; i++) {
//         let nextValue = fibonacciNumbers[i] + fibonacciNumbers[i + 1];
//         fibonacciNumbers.push(nextValue);
//         fibonacciArray.push(nextValue);
//     }
//     return fibonacciArray[clientsNumber - 1];
// }
// alert('The first array method result is ' + fibonacciFirstArray(clientsNumber));

//function fibonacciFirstArray(clientsNumber) {
//     let fibonacciNumbers = [1, 1];
//     for (let i = 0; i < clientsNumber; i++) {
//         let nextValue = fibonacciNumbers[i] + fibonacciNumbers[i + 1];
//         fibonacciNumbers.push(nextValue);
//     }
//     if (clientsNumber < 1) {
//         return 0;
//     }
//     return fibonacciNumbers[clientsNumber - 1];
// }
// alert('The first array method result is ' + fibonacciFirstArray(clientsNumber));
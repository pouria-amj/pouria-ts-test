"use strict";
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const numberInput = document.getElementById('numberInput');
const errorDiv = document.getElementById('error');
const generateRandomNumber = () => Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
const findPrimes = (value) => {
    if (value === undefined)
        return null;
    if (value <= 9999) {
        return [];
    }
    const isPrime = new Array(value + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    let currentPrime = 2;
    while (currentPrime <= Math.sqrt(value)) {
        if (isPrime[currentPrime]) {
            for (let multiple = currentPrime * currentPrime; multiple <= value; multiple += currentPrime) {
                isPrime[multiple] = false;
            }
        }
        do {
            currentPrime++;
        } while (currentPrime <= Math.sqrt(value) && !isPrime[currentPrime]);
    }
    const primes = [];
    for (let i = 2; i <= value; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }
    return primes;
};
let randomNumber = null;
numberInput.addEventListener('input', () => {
    const inputValue = numberInput.value.trim();
    if (/^\d+$/.test(inputValue)) {
        errorDiv.textContent = '';
        randomNumber = Number(inputValue);
    }
    else {
        errorDiv.textContent = 'Please enter a valid number.';
    }
});
button1.addEventListener('click', () => {
    randomNumber = generateRandomNumber();
    numberInput.valueAsNumber = randomNumber;
});
button2.addEventListener('click', () => {
    const list_of_primes = findPrimes(randomNumber);
    console.log(list_of_primes);
});
button3.addEventListener('click', () => {
    randomNumber = 0;
    numberInput.valueAsNumber = randomNumber;
});
//# sourceMappingURL=index.js.map
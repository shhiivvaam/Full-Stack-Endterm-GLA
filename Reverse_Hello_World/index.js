function reverseString() {
    const inputElement = document.getElementById('inputString');
    const resultElement = document.getElementById('result');

    const inputString = inputElement.value;
    const reversedString = inputString.split('').reverse().join('');

    resultElement.textContent = `After reversing: ${reversedString}`;
}
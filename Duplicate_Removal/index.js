function removeDuplicates() {
    const inputElement = document.getElementById('inputArray');
    const resultElement = document.getElementById('result');

    const inputArray = inputElement.value.split(' ').map(item => item.trim());
    let uniqueArray = [];


    for (let i = 0; i < inputArray.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (inputArray[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArray.push(inputArray[i]);
        }
    }
    resultElement.textContent = `After Removing Duplicates : ${uniqueArray.join(', ')}`;
}
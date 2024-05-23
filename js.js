let selectedOptions = [];

function selectOption(optionNumber) {
    if (selectedOptions.includes(optionNumber)) {
        return; // Prevent selecting an option twice
    }
    if (selectedOptions.length >= 4) {
        return; // Limiting to selecting a maximum of 4 options
    }

    selectedOptions.push(optionNumber);
    updateButtonNumbers();
}

function resetOptions() {
    selectedOptions = [];
    updateButtonNumbers();
}

function updateButtonNumbers() {
    const buttons = document.querySelectorAll('.container button');
    buttons.forEach((button, index) => {
        button.innerText = button.innerText.replace(/^\d+\. /, ''); // Remove any existing numbers
        
        if (selectedOptions.includes(index + 1)) {
            button.innerText = (selectedOptions.indexOf(index + 1) + 1) + '. ' + button.innerText;
        }
    });
}
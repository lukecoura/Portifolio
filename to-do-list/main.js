const inputElement = document.querySelector('[data-input]');
const addTaskButton = document.querySelector('[data-button]');
const tasksContainer = document.querySelector('[data-tasks]');


const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
    const inputIsValid = validateInput();

    if (!inputIsValid) {
        return inputElement.classList.add('error');
    }
}

const handleInputChange = () => {
    const inputIsValid = validateInput();

    if (inputIsValid) {
        return inputElement.classList.remove('error');
    }
}

addTaskButton.addEventListener('click', () => handleAddTask());

inputElement.addEventListener('change', () => handleInputChange());
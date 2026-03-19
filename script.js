const MAX_LENGTH = 50;

const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');

const updateCharCount = () => {
    const value = textInput.value;
    const length = value.length;
    charCount.classList.toggle('limit', length === MAX_LENGTH);
    charCount.textContent = `Character Count: ${length}/${MAX_LENGTH}`;
}

updateCharCount();

textInput.addEventListener('input', updateCharCount);
const MAX_LENGTH = 49;

const textInput = document.getElementById('text-input');
textInput.setAttribute('maxlength', MAX_LENGTH);
const charCount = document.getElementById('char-count');
charCount.textContent = `Character Count: ${textInput.value.length}/${MAX_LENGTH}`;

textInput.addEventListener('input', (e) => {
    const value = e.target.value;
    const length = value.length;
    charCount.classList.toggle('limit', length === MAX_LENGTH);
    charCount.textContent = `Character Count: ${length}/${MAX_LENGTH}`;
});
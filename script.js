const MAX_LENGTH = 49;

const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');

textInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.slice(0, MAX_LENGTH);
    const value = e.target.value;
    const length = value.length;
    charCount.classList.toggle('limit', length === MAX_LENGTH);
    charCount.textContent = `Character Count: ${length}/${MAX_LENGTH}`;
});
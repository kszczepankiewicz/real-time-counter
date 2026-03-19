const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');

textInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.slice(0, 50);
    const value = e.target.value;
    const length = value.length;
    charCount.classList.toggle('limit', length === 50);
    charCount.textContent = `Character Count: ${length}/50`;
});
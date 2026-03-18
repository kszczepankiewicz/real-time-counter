const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');

textInput.addEventListener('input', (e) => {
    e.target.value = e.target.value.slice(0, 50);
    charCount.classList.toggle('limit', e.target.value.length === 50);
    charCount.textContent = `Character Count: ${e.target.value.length}/50`;
});
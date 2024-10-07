document.getElementById('convertButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputText = bionicRead(inputText);
    document.getElementById('outputText').innerHTML = outputText;
    document.getElementById('outputTextLarge').innerHTML = outputText;
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').innerHTML = '';
    document.getElementById('outputTextLarge').innerHTML = '';
});

document.getElementById('enlargeButton').addEventListener('click', function() {
    document.getElementById('mainContainer').classList.add('hidden');
    document.getElementById('enlargedOutput').classList.remove('hidden');
});

document.getElementById('resetLargeButton').addEventListener('click', function() {
    document.getElementById('mainContainer').classList.remove('hidden');
    document.getElementById('enlargedOutput').classList.add('hidden');
});

function bionicRead(text) {
    const lines = text.split('\n');
    return lines.map(line => {
        return line.split(' ').map(word => {
            const midIndex = Math.ceil(word.length / 2);
            return `<b>${word.slice(0, midIndex)}</b>${word.slice(midIndex)}`;
        }).join(' ');
    }).join('\n').replace(/\n/g, '<br>');
}
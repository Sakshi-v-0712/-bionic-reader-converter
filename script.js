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

document.getElementById('uploadButton').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const fileContent = e.target.result;
            document.getElementById('inputText').value = fileContent;
            const outputText = bionicRead(fileContent);
            document.getElementById('outputText').innerHTML = outputText;
            document.getElementById('outputTextLarge').innerHTML = outputText;
        };
        reader.readAsText(file);
    }
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

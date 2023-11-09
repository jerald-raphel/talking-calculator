function appendToDisplay(value) {
   document.getElementById('display').innerText += value;
}

function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function calculate() {
    try {
        let result = eval(document.getElementById('display').innerText);
        document.getElementById('display').innerText = result;
        speak(result);
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
        speak('Error');
    }
}

function speak(text) {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}
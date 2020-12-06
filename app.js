var tempoText = document.getElementById("tempoText");
var tempoButton = document.getElementById("tempoButton");
var noteText = document.getElementById("noteText");
var noteButton = document.getElementById("noteButton");
var gammeText = document.getElementById("gammeText");
var gammeButton = document.getElementById("gammeButton");
var tempoRange = document.getElementById("tempoRange");

var noteArray = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
var gammeArray = ["Majeur", "Mineur Naturelle", "Mineur Harmonique", "Mineur Mélodique"];

tempoButton.addEventListener("click", () => {
    min = Math.ceil(70);
    max = Math.floor(tempoRange.value);
    tempoText.textContent = Math.floor(Math.random() * (max - min +1)) + min;
});

noteButton.addEventListener("click", () => {
    ramdomArray(noteArray, noteText);
});

gammeButton.addEventListener("click", () => {
    ramdomArray(gammeArray, gammeText);
});

function ramdomArray(array, text) {
    var newChoice = Math.floor(Math.random() * array.length);
    text.textContent = array[newChoice];
}
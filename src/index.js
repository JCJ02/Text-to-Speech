const TEXTAREA = document.getElementById("textArea");
const SPEAKBUTTON = document.getElementById("speakButton");

SPEAKBUTTON.addEventListener("click", ()=>{
    let speechSynthesisUtterance = new SpeechSynthesisUtterance(TEXTAREA.value);
    speechSynthesis.speak(speechSynthesisUtterance);
});
const SPEAKBUTTON = document.getElementById("speakButton");

SPEAKBUTTON.addEventListener("click", ()=>{
    const TEXTAREA = document.getElementById("textArea");
    let speechSynthesisUtterance = new SpeechSynthesisUtterance(TEXTAREA.value);
    speechSynthesis.speak(speechSynthesisUtterance);
});
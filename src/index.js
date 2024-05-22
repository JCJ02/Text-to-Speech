const SPEAKBUTTON = document.getElementById("speakButton");

SPEAKBUTTON.addEventListener("click", ()=>{
    const TEXTAREA = document.getElementById("textArea");
    let speechSynthesisUtterance = new SpeechSynthesisUtterance(TEXTAREA.value);
    speechSynthesisUtterance.lang = "fil"; // SET THE LANGUAGE TO FILIPINO
    speechSynthesis.speak(speechSynthesisUtterance);
});
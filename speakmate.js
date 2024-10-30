
let btns = document.querySelectorAll(".btn");
let text=document.getElementById("text");
let li = document.querySelector(".listen");
let clear = document.getElementById("clear");

let speech = new SpeechSynthesisUtterance();

let voiceSelect =  document.querySelector("select");
// popolate voices after loading
window.speechSynthesis.onvoiceschanged = noOfVoices;
function noOfVoices(){
    // get all the available voices and langugaes
    //adding all the voice in a drop down
    let voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice,index) =>{
        const option = document.createElement("option");
        option.textContent = `${voice.name} (${voice.lang})`;
        // store the voices values for easy retrival;
        option.value = index;
        voiceSelect.appendChild(option);
    })
}


btns.forEach((btn) =>{
   btn.addEventListener('click',() => {
    let textValue = btn.innerHTML;
    text.value += textValue;
    console.log(btn.innerHTML);
   })
})

console.log(btns);
function loadVoice(){
    li.addEventListener('click',()=>{
         speech.text = document.querySelector("textarea").value;
         window.speechSynthesis.speak(speech);
    })   
}


document.querySelector('.listen').addEventListener('click',() =>{
    speech.text = document.querySelector("textarea");
})

// to clear the content
function clearContent(){
   document.getElementById("text").value = '';
}
// del the last character only
 function delLastCharacter(){
    let string = document.getElementById("text");
    string.value = string.value.slice(0,-1);
 }
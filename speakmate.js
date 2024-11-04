

// let text=document.getElementById("text");//text area text
// let li = document.querySelector(".listen");//listen button
// let clear = document.getElementById("clear");//clear buttton



// let voiceSelect =  document.querySelector("select");select tag
// popolate voices after loading
// window.speechSynthesis.onvoiceschanged = noOfVoices;
// function noOfVoices(){
//     // get all the available voices and langugaes
//     //adding all the voice in a drop down
//     let voices = window.speechSynthesis.getVoices();
//     speech.voice = voices[0];
//     voices.forEach((voice,index) =>{
//         const option = document.createElement("option");
//         option.textContent = `${voice.name} (${voice.lang})`;
//         // store the voices values for easy retrival;
//         option.value = index;
//         voiceSelect.appendChild(option);
//     })
// }



function speakk(letter){
    let speech = new SpeechSynthesisUtterance(letter);
    window.speechSynthesis.speak(speech);
}
//add event listeners om each button
 document.querySelectorAll(".btn").forEach(btn =>{
     btn.addEventListener('click',() =>{
        const letter = btn.innerHTML;
        speakk(letter);
     })
 })
  //instructions
  
  function hideandshow(){
    let inst = document.getElementById("instruct");
    if(inst.style.display == "none"){
        inst.style.display = "block";
    }
    else{
        inst.style.display = "none";
    }
  }

// btns.forEach((btn) =>{
//     btn.addEventListener('click',() => {
//      let textValue = btn.innerHTML;
     
     // text.value += textValue;
     // console.log(btn.innerHTML);
//     })
//  })

// console.log(btns);
// function loadVoice(){
//     li.addEventListener('click',()=>{
//          speech.text = document.querySelector("textarea").value;
//          window.speechSynthesis.speak(speech);
//     })   
// }


// document.querySelector('.listen').addEventListener('click',() =>{
//     speech.text = document.querySelector("textarea");
// })

// to clear the content
// function clearContent(){
//    document.getElementById("text").value = '';
// }
// del the last character only
//  function delLastCharacter(){
//     let string = document.getElementById("text");
//     string.value = string.value.slice(0,-1);
//  }
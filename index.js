
// var voiceList = document.querySelector('#voiceList');
// var textInput = document.querySelector('#txtInput');
// var btnSpeak = document.querySelector('#btnSpeak');
// var txt2Speech = window.speechSynthesis;
// var voices = [];
// const GetVoices = () =>{
//     voices= txt2Speech.getVoices();

//     voiceList.innerHTML = '';
//     voices.forEach((voice)=>{
//         var listItem = document.createElement('option');
//         listItem.textContent = voice.name;
//         listItem.setAttribute('data-lang',voice.lang);
//         listItem.setAttribute('data-name',voice.name);
//         voiceList.appendChild(listItem);
//     });
//     voiceList.selectedIndex = 0 
// }
// if(speechSynthesis !== undefined){
//     speechSynthesis.onvoiceschanged=GetVoices;
// }
// btnSpeak.addEventListener('click', ()=>{
//     var toSpeak= new  SpeechSynthesisUtterance(textInput.value);
//     var selectedVoiceName =  voiceList.selectedOptions[0].getAttribute('data-name');
//     voices.forEach((voice)=>{
//         if(voice.name===selectedVoiceName){
//             toSpeak.voice = voice;
//         }
//     });
//     txt2Speech.speak(toSpeak);
// })
// GetVoices();

speechSynthesis.cancel();

var isSpeaking = false;
var tts = window.speechSynthesis;
var speech = new SpeechSynthesisUtterance();
speech.rate =1;
speech.pitch=1;
speech.volume=1;
var voices = tts.getVoices();

const speakText = () =>{
    isSpeaking =true;
    speech.text=document.querySelector('#textInput').value;
    speechSynthesis.speak(speech);
}

// method to pause speech
pauseSpeech = () =>{
    if(isSpeaking){
        isSpeaking=false;
        speechSynthesis.pause();
        document.getElementById('btnPause').innerHTML = `Resume <i class="fa fa-play-circle" aria-hidden="true"></i>`
    }else{
        isSpeaking = true;
        speechSynthesis.resume();
        document.getElementById('btnPause').innerHTML = `Pause <i class="fa fa-pause-circle" aria-hidden="true"></i>`
    }
}

// method to stop speech
stopSpeech = ()=>{
    isSpeaking =false;
    speechSynthesis.cancel();
}

// method to change the voices

changeVoice=(voice)=> {
    if (voice == "voice1") {
      speech.voice = speechSynthesis.getVoices()[8];
    } else if (voice == "voice2") {
      speech.voice = speechSynthesis.getVoices()[6];
    } else if (voice == "voice3") {
     speech.voice = speechSynthesis.getVoices()[1];
    } else if (voice == "voice4") {
      speech.voice = speechSynthesis.getVoices()[11];
    } else if (voice == "voice5") {
      speech.voice = speechSynthesis.getVoices()[4];
    } 
    else if (voice == "voice6") {
        speech.voice = speechSynthesis.getVoices()[10];
      } 
  }

speechSynthesis.addEventListener('voiceschanged',changeVoice);

changeVoiceSpeed=(voiceSpeed)=> {
    // For some reason, speed below 0.5 doesn't work
    if (voiceSpeed == "speed2") {
      speech.rate = 2;
    } else if (voiceSpeed == "speed1.75") {
      speech.rate = 1.75;
    } else if (voiceSpeed == "speed1.5") {
      speech.rate = 1.5;
    } else if (voiceSpeed == "speed1.25") {
      speech.rate = 1.25;
    } else if (voiceSpeed == "speed1") {
      speech.rate = 1;
    } else if (voiceSpeed == "speed0.75") {
      speech.rate = 0.75;
    } else if (voiceSpeed == "speed0.5") {
      speech.rate = 0.5;
    }
  }
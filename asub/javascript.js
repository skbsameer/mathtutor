let audioI = 0;
        let audio;
var playing=false;
var score;
var action;
var timeRemaining;
var correctAnswer;


    function readOutLoud(message) {
  var speech = new SpeechSynthesisUtterance();

  // Set the text and voice attributes.
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}

/*
var recognizing = false;
var ignore_onend;
var start_timestamp;
if (!('webkitSpeechRecognition' in window)) {
  upgrade();
} else {
  start_button.style.display = 'inline-block';
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onstart = function() {
    recognizing = true;
    showInfo('info_speak_now');
    start_img.src = 'mic-animate.gif';
  };

  recognition.onerror = function(event) {
    if (event.error == 'no-speech') {
      start_img.src = 'mic.gif';
      showInfo('info_no_speech');
      ignore_onend = true;
    }
    if (event.error == 'audio-capture') {
      start_img.src = 'mic.gif';
      showInfo('info_no_microphone');
      ignore_onend = true;
    }
    if (event.error == 'not-allowed') {
      if (event.timeStamp - start_timestamp < 100) {
        showInfo('info_blocked');
      } else {
        showInfo('info_denied');
      }
      ignore_onend = true;
    }
  };

  recognition.onend = function() {
    recognizing = false;
    if (ignore_onend) {
      return;
    }
    start_img.src = 'mic.gif';
    if (!final_transcript) {
      showInfo('info_start');
      return;
    }
    showInfo('');
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
      var range = document.createRange();
      range.selectNode(document.getElementById('final_span'));
      window.getSelection().addRange(range);
    }
    if (create_email) {
      create_email = false;
      createEmail();
    }
  };

  recognition.onresult = function(event) {
    var interim_transcript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    final_transcript = capitalize(final_transcript);
    final_span.innerHTML = linebreak(final_transcript);
    interim_span.innerHTML = linebreak(interim_transcript);
    if (final_transcript || interim_transcript) {
      showButtons('inline-block');
    }
  };
}
*/

                
document.getElementById('startReset').onclick=function(){
    
    if(playing==true){
        if(audio)
                audio.load();
                audio = document.getElementById("so2");
                audio.play();
        location.reload(); //reload page
    }else{
        //if we are not playing
        
        //change mode to playing
        if(audio)
                audio.load();
                audio = document.getElementById("so2");
                audio.play();
        playing=true;
        
        //set score zero    
        score=0; document.getElementById('scorevalue').innerHTML=score;   
        
       //show count down box
            show("timeRemaining");
            timeRemaining=60;
            document.getElementById('timeRemainingValue').innerHTML=timeRemaining;
        
        //hide Game Over message
         hide("gameOver");
        
       //CHANGE BUTTON TO RESET
        document.getElementById('startReset').innerHTML="Reset/back";
document.getElementById('startReset2').innerHTML="";
document.getElementById('startReset3').innerHTML="";
        
         // reduce time by 1 sec in loop
        
        startCountdown();
        
        //generate a new Q/A
        generateQA();
    }
}

                
document.getElementById('startReset2').onclick=function(){
    
    if(playing==true){
        if(audio)
                audio.load();
                audio = document.getElementById("so2");
                audio.play();
        location.reload(); //reload page
    }else{
        //if we are not playing
        
        //change mode to playing
        if(audio)
                audio.load();
                audio = document.getElementById("so2");
                audio.play();
        playing=true;
        
        //set score zero    
        score=0; document.getElementById('scorevalue').innerHTML=score;   
        
       //show count down box
            show("timeRemaining");
            timeRemaining=30;
            document.getElementById('timeRemainingValue').innerHTML=timeRemaining;
        
        //hide Game Over message
         hide("gameOver");
        
       //CHANGE BUTTON TO RESET
        document.getElementById('startReset2').innerHTML="Reset/back"; document.getElementById('startReset').innerHTML=" ";
document.getElementById('startReset3').innerHTML=" ";
        
        
         // reduce time by 1 sec in loop
        
        startCountdown();
        
        //generate a new Q/A
        generateQA();
    }
}

                
document.getElementById('startReset3').onclick=function(){
    
    if(playing==true){
        if(audio)
                audio.load();
                audio = document.getElementById("so2");
                audio.play();
        location.reload(); //reload page
    }else{
        //if we are not playing
        
        //change mode to playing
        if(audio)
                audio.load();
                audio = document.getElementById("so2");
                audio.play();
        playing=true;
        
        //set score zero    
        score=0; document.getElementById('scorevalue').innerHTML=score;   
        
       //show count down box
            show("timeRemaining");
            timeRemaining=15;
            document.getElementById('timeRemainingValue').innerHTML=timeRemaining;
        
        //hide Game Over message
         hide("gameOver");
        
       //CHANGE BUTTON TO RESET
        document.getElementById('startReset3').innerHTML="Reset/back";
        document.getElementById('startReset2').innerHTML="";
document.getElementById('startReset').innerHTML="";
        

         // reduce time by 1 sec in loop
        
        startCountdown();
        
        //generate a new Q/A
        generateQA();
    }
}
 
//clicking on ans box

for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick=function(){
    //if we are playing
    if(playing==true){//yes
        if(this.innerHTML==correctAnswer){
            //correct ans
            
            //increase score  value
            score++;
            document.getElementById("scorevalue").innerHTML=score;
            
            if (audio) {
                    audio.load();
                }
                

                audio = document.getElementById("a");
                audio.play();

            //hide wrong box and show correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            
            //generate new Q/A
            
            generateQA();
            
            
        }else{
            if(audio)
            audio.load();
                audio = document.getElementById("so5");
                audio.play();
            if(score-1>=0)
                score--;
            document.getElementById("scorevalue").innerHTML=score;
            //wrong ans
            show("wrong");
            hide("correct");
            setTimeout(function(){
                hide("wrong");
            },1000)
            
           
        }
    }
}
}


function startCountdown(){
    action=setInterval(function(){
       timeRemaining -=1; 
        document.getElementById('timeRemainingValue').innerHTML=timeRemaining;
        if(timeRemaining==0){
            stopCountDown();
           show("gameOver");
            
            document.getElementById('gameOver').innerHTML="<p>Game Over</p><p>Your score is "+ score+".</p>";
            if(audio)
            audio.load();
                audio = document.getElementById("over");
                audio.play();
            
           hide("timeRemaining");
            hide("correct");
            hide("wrong");
            playing=false;
            document.getElementById('startReset').innerHTML="Start Game";
           
        }
    },1000)
    
    
}

//stop counter
function stopCountDown(){
    clearInterval(action);
}


//hide some element
function hide(id){
    document.getElementById(id).style.display="none";
}

//show some element
function show(id){
    document.getElementById(id).style.display="block";
}

//generate Q/A

function generateQA(){
    var x=1+Math.round(Math.random()*9);
    var y=1+Math.round(Math.random()*9);

    if(x<y) { var t = x; x =y; y=t; }
    correctAnswer=x-y;
    document.getElementById("question").innerHTML= x+"-"+y;

    var correctPositiom=1+Math.round(Math.random()*3);
        document.getElementById("box"+correctPositiom).innerHTML=correctAnswer; readOutLoud(correctAnswer); //fill one box with the correct ans
    
    
    
    //fill other boxes with wrong answers
    
    var answers=[correctAnswer];
    
    for(i=1;i<5;i++){
        
        if(i!=correctPositiom){
            var wrongAnswer;
            
            
            do{
                wrongAnswer= Math.abs((1+Math.round(Math.random()*18))-(1+Math.round(Math.random()*22)))
            
           }while(answers.indexOf(wrongAnswer)>-1)
               

               document.getElementById('box'+i).innerHTML=wrongAnswer; readOutLoud(wrongAnswer);
                answers.push();
            
        }
    }
    
}

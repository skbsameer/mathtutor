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
    correctAnswer=x+y;
    document.getElementById("question").innerHTML= x+"+"+y;

    var correctPositiom=1+Math.round(Math.random()*3);
        document.getElementById("box"+correctPositiom).innerHTML=correctAnswer; //fill one box with the correct ans
    
    
    
    //fill other boxes with wrong answers
    
    var answers=[correctAnswer];readOutLoud(correctAnswer);
    
    for(i=1;i<5;i++){
        
        if(i!=correctPositiom){
            var wrongAnswer;
            
            
            do{
                wrongAnswer=(1+Math.round(Math.random()*9))+(1+Math.round(Math.random()*9)) ; readOutLoud(wrongAnswer);
            
           }while(answers.indexOf(wrongAnswer)>-1)
           
               

               document.getElementById('box'+i).innerHTML=wrongAnswer;
                answers.push();
            
        }
    }

}

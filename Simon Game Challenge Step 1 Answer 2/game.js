
let userchosenpattern=[]
let machinechosenpattern=[]
var a = 0;
var level = 0;
let colorlist=["green","red","yellow","blue"];



$(document).keydown(function(){
  if(a==0){
  a=1;
  nextSequence();
}});

$(".btn").click(function(){
  if(machinechosenpattern.length!=0){
  var userChosenColour = $(this).attr("id");
  userchosenpattern.push(userChosenColour);

  playthesound(userChosenColour);
  animation(userChosenColour);
  checkAnswer(userchosenpattern.length-1)
}
});

function checkAnswer(currentLevel){
 if(machinechosenpattern.length!=0){
  if(userchosenpattern[currentLevel]===machinechosenpattern[currentLevel]){
    if(userchosenpattern.length===machinechosenpattern.length){
      setTimeout(function(){
        nextSequence();}, 1000)

    }
  }
  else{
    $("#level-title").text("Game over ,press any key to start");
    playthesound("wrong");

    $("body").addClass("game-over");

    setTimeout(function(){
      $("body").removeClass("game-over");
    },1000)

    startOver();

  }
}
}

function startOver(){
  a=0;
  machinechosenpattern=[];
  level=0;
}

function nextSequence(){
  userchosenpattern=[];
  var randomNumber = Math.floor(Math.random()*4);
  randomChosenColour = colorlist[randomNumber];
  machinechosenpattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playthesound(randomChosenColour);
  level++;
  $("#level-title").text("Level "+level)
}

function playthesound(color){
  var audio = new Audio("sounds/"+color+".mp3");
  audio.play();
}

function animation(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
  },100);
}

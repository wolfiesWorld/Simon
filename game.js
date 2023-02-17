const buttonColors = ['red','blue','green','yellow'];
const gamePattern = [];


function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    const randomChosenColor = buttonColors[randomNumber];
    let buttonColor = document.getElementById(randomChosenColor);
    gamePattern.push(randomChosenColor);
    // $('#red').click(function () {
    //   $('#blue').fadeOut(3000);
    // });
    let audio = new Audio(`${randomChosenColor}.mp3`)

    $("#"+randomChosenColor).fadeOut(250).fadeIn(250)


}

$('body').click(function(){nextSequence()});
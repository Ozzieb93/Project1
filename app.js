$(function(){

  let wordArray = '';
  const regEx = /[\w]/;

  const audio1 = new Audio('./sounds/wrong.mp3');
  const audio2 = new Audio('./sounds/blop.mp3');
  const audio3 = new Audio('./sounds/start.mp3');
  const audio4 = new Audio('./sounds/finish.mp3');


  let mainText = $('#main-text').text();
  mainText = mainText.split(' ');

  $('#current-word').html(mainText[0]);
  $('.hidden').hide();

  let start = 0;
  let score = 0;
  let wrongType = 0;
  const timer = false;
  let backspace = 0;

  // scoreApp();
  let textSize = mainText.length;

  // Word checking

  $('.letter-display').on('keydown',function(event){

    const currWord = mainText[start].toUpperCase();
    const key = event.keyCode;
    const code = String.fromCharCode(key);
    const scoreUpdate = $('#Player1').text(score);
    const incorrect = $('#wrong-words').text(wrongType);

    if(code !== ' ' ){
      // backspaceListen();
      if(( key !== 8 && regEx.test(code))){
        wordArray += code;
      } else {
        wordArray = wordArray.slice(0,-1);
      }
    } else {
      start++;

      $('#current-word').html(mainText[start]);

      if(currWord === wordArray){
        scoreUpdate;
        score++;
        console.log(score);
        // correctImage();
        audio2.play();
        console.log('found word '+ currWord);
      } else {
        audio1.play();
        console.log('Word didnt match. Typed '+ wordArray + ' instead of '+ currWord);
        incorrect;
        wrongType++;
      }
      wordArray='';
      $('.letter-display').val('');

      if(start < textSize) {
        console.log();
      } else {
      }
    }
  });

  // START BUTTON

  $('#start-btn').click(function(){
    $('.letter-display').removeAttr('disabled','disabled');
    $('.letter-display').focus();
    $('#start-btn').attr('disabled', true);
    $( '#current-word' ).stop();
    startTimer();
    // audio3.play();
  });

  // New Game
  $('#new-game').click(function(){
    location.reload();
  });

  // CALCULATING THE SCORE

  function gameOver(){
    $('.letter-display').prop('disabled', true);
  }

  // START TIMER

  function startTimer(){
    let timer = 60;
    const timerUp = setInterval(function() {
      timer--;

      $('#countdown span').text(timer);

      if(timer == false){
        timer = true;
        gameOver();
        correctImage();
        // accuracy();
        audio4.play();
        console.log('number of words typed incorectly ' + wrongType);
        clearInterval(timerUp);
      }
    }, 1000);
  }

  // Image appear after
  function correctImage() {
    // console.log('hello');

    if (score < 10) {
      $('.feedback1').show();
    } else if (score > 0 && score < 10 ) {
      $('.feedback2').show();
      console.log('omg');
    } else if (score > 10 && score < 15 ) {
      $('.feedback3').show();
      console.log('omg');
    } else if (score > 15 && score < 25) {
      $('.feedback4').show();
    } else if (score > 25 && score < 35) {
      $('.feedback5').show();
    } else if (score > 35 && score < 45) {
      $('.feedback6').show();
    } else if (score > 45 && score < 50) {
      $('.feedback7').show();
    } else if (score > 50 && score < 60) {
      $('.feedback8').show();
    }
  }

  // function accuracy () {
  //   // const percentage = (( (backspace -score) / wrongType ));
  //   // console.log(backspace);
  //   const percentage = 100 -(score-(wrongType/60));
  //   (percentage).toFixed(2);
  //   console.log(percentage);
  // }
  //
  // function backspaceListen(){
  //   if (key === 8);
  // } backspace++;
  //   console.log(backspace);
  // }

});

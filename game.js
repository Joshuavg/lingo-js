var random = Math.floor( Math.random() * 479);
var answer = words[random];
var answerArray = answer.split('');
console.log(answer);

var checkBtn =  document.getElementById('check');
checkBtn.setAttribute("onclick", "check();");

var firstLetter = document.getElementById('letter_0_0');

firstLetter.value = answerArray[0];
var attempt = 1

function check(){
  for (var b = 0; b <= 4; b++) {
  for (var i = 0; i <= 4; i++) {
    var input = document.getElementById("letter_" + b + "_" + i);

    console.log(input.value);

    if(input.value == answerArray[i]){
      input.style.backgroundColor = "red";
    }
    else
      for (var j = 0; j <= 4; j++) {
        if (input.value === answerArray[j]) {
          input.style.backgroundColor = "yellow";
        }
      }
    }
  }
}

var output = "";

var romanNumeral = function(number){
  if (number > 3999) {
    return "Funtion is too large for Roman Numerals";
  }
  while (number>0) {
  if (number>= 1000) {
    number-=1000;
    output += "M";
    continue;
  }
  if (number>= 500) {
    number-=500;
    output += "D";
    continue;
  }
  if (number>= 100) {
    number-=100;
    output += "C";
    continue;
  }
  if (number>= 50) {
    number-=50;
    output += "L";
    continue;
  }
  if (number>= 10) {
    number-=10;
    output += "X";
    continue;
  }
  if (number>= 5) {
    number-=5;
    output += "V";
    continue;
  }
  if (number>= 1) {
    number-=1;
    output += "I";
    continue;
  }
}
console.log(output)
}

$(document).ready(function(event) {

  $("#roman-numeral").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#user-input").val());

    var userResult = romanNumeral(userInput);

    $("#results").text(userResult);

  });
});

var output = "";

var romanNumeral = function(number){
var numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "IX", "V", "IV", "I"]
var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

if (number>=4000){
return "The maximum number for Roman Numerals is 3999"
} else {
for( i in values){
  while( number >= values[i]){
    output += numerals[i];
    number -= values[i];
    console.log(output);
  }
}
return output;
};
};

$(document).ready(function(event) {

  $("#roman-numeral-loop").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("#user-input-loop").val());

    output="";

    var userResult = romanNumeral(userInput);

    $("#results-loop").text(userResult);

  });
});

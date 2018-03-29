var output = "";

var romanNumeral = function(number){

  if (number > 3999) {
    return "Funtion is too large for Roman Numerals";
  };

  while (number>0) {
  if (number>= 900) {
    if(number<=1000 && number >=900) {
      number-=900;
      output += "CM";
      continue;
    } else if (number>=1000) {
    number-=1000;
    output += "M";
    continue;
    }
  }
  if (number>= 400) {
    if(number<=500 && number >=400) {
      number-=400;
      output += "CD";
      continue;
    } else if (number >=500) {
    number-=500;
    output += "D";
    continue;
    }
  }
  if (number>= 90) {
    if(number<=100 && number >=90) {
      number-=90;
      output += "XC";
      continue;
    } else if (number >=100) {
    number-=100;
    output += "C";
    continue;
    }
  }
  if (number>= 40) {
    if(number<=50 && number >=40) {
      number-=40;
      output += "XL";
      continue;
    } else if (number >=50) {
    number-=50;
    output += "L";
    continue;
    }
  }
  if (number>= 9) {
    if(number<=10 && number >=9) {
      number-=9;
      output += "IX";
      continue;
    } else if (number >=10) {
    number-=10;
    output += "X";
    continue;
    }
  }
  if (number>= 4) {
    if(number<=5 && number >=4) {
      number-=4;
      output += "IV";
      continue;
    } else if (number >=5) {
    number-=5;
    output += "V";
    continue;
    }
  }
  if (number>= 1) {
    number-=1;
    output += "I";
    continue;
  }
};
console.log(output);
return output;
};


$(document).ready(function(event) {

  $("#roman-numeral").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("#user-input").val());
    
    output="";

    var userResult = romanNumeral(userInput);

    $("#results1").text(userResult);

  });
});

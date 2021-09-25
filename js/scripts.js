function processOperation(button) {
  const input1 = document.getElementById("inputText1").value;
  const input2 = document.getElementById("inputText2").value;
  let operator = button.id;

  //Only pos and neg numbers
  const regex = new RegExp(
    /(^-?0\.[0-9]*[1-9]+[0-9]*$)|(^-?[1-9]+[0-9]*((\.[0-9]*[1-9]+[0-9]*$)|(\.[0-9]+)))|(^-?[1-9]+[0-9]*$)|(^0$){1}/
  );

  if (
    (!input1.match(regex) && !input2.match(regex)) ||
    input1.charAt(0) === "" ||
    (input2.charAt(0) === "" && operator !== "ActionButton5")
  ) {
    console.log("Expected a number");
    return false;
  }

  //XConvert strings to numbers
  const number1 = Number(input1);
  const number2 = Number(input2);

  switch (operator) {
    case "ActionButton1":
      (function (number1, number2) {
        console.log(number1 + " + " + number2 + " = " + (number1 + number2));
      })(number1, number2);
      break;

    case "ActionButton2":
      (function (number1, number2) {
        console.log(number1 + " - " + number2 + " = " + (number1 - number2));
      })(number1, number2);
      break;

    case "ActionButton3":
      (function (number1, number2) {
        console.log(number1 + " * " + number2 + " = " + number1 * number2);
      })(number1, number2);
      break;

    case "ActionButton4":
      console.log(number1 + " / " + number2 + " = " + divide(number1, number2));
      break;

    case "ActionButton5":
      console.log(number1 + "! = " + fact(number1));
      break;
  }
}

function divide(x, y) {
  if (y === 0) {
    return "Error. Can't divide by 0";
  }
  if (x === 0) {
    return 0;
  }

  return x / y;
}

function fact(x) {
  //max number of recursive calls for my js motor: 170
  if (x > 170 || x < -170) {
    return "Error. Max number of recursive calls reached. Choose another number.";
  }

  //fact for neg numbers
  if (x < 0) {
    return x * fact(x + 1);
    //base case
  } else if (x === 0) {
    return 1;
    //fact for pos numbers
  } else {
    return x * fact(x - 1);
  }
}

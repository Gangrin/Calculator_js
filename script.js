var myEquation = [];
var helpOne = 0;
var helpTwo = 0;

function fillTestField(value) {
  var testValue = ""
  if (value instanceof Array) {
    testValue = value.join(' ')
  }
  document.getElementById("test").value = testValue;
}

function getInt() {
  var equationElement = document.getElementById("equation");
  var currentEquation = equationElement.value;
  equationElement.value = currentEquation + event.target.value;

  if (helpTwo === 0) {

    if (event.target.value === "+" || event.target.value === "-" ||
    event.target.value === "*" || event.target.value === "/") {
      document.getElementById("equation").value = "error";
    }

    else {
      myEquation[helpOne] = event.target.value;
    }
  }

  else {

    if (event.target.value === "+" || event.target.value === "-" ||
    event.target.value === "*" || event.target.value === "/") {
      helpOne++;
      myEquation[helpOne] = event.target.value;
      helpOne++
    }

    else {

      if (myEquation[helpOne] == null) {
        myEquation[helpOne] = event.target.value;
      }

      else {
        myEquation[helpOne] = myEquation[helpOne] + event.target.value;
      }
    }
  }

  fillTestField(myEquation);
  helpTwo++;
}

function clearAll() {
  document.getElementById("equation").value = "";
  myEquation = [];
  fillTestField();
  helpOne = 0;
  helpTwo = 0;
}

function getResult() {

  var signs = [];
  var sig = 0;

  for (var i = 0; i < myEquation.length; i++) {

    if (myEquation[i] === "+") {
      signs.push("+");
      signs.push(i);
    }

    else if (myEquation[i] === "-") {
      signs.push("-");
      signs.push(i);
    }

    else if (myEquation[i] === "*") {
      signs.push("*");
      signs.push(i);
    }

    else if (myEquation[i] === "/") {
      signs.push("/");
      signs.push(i);
    }
  }

  for (var i = 0; i < myEquation.length; i++) {                         //this loop finds integers in myEquation array and converts them from string to integer

    if (myEquation[i] !== "+" || myEquation[i] !== "-" ||
        myEquation[i] !== "*" || myEquation[i] !== "/") {
          myEquation[i] = parseInt(myEquation[i], 10);
        }
  }


  for (var i = 0; i < signs.length - 1; i++) {

    if (signs[i] === "+") {
      sig = signs[i + 1];
      document.getElementById("equation").value = (myEquation[sig - 1] + myEquation[sig+1]);
    }
    if (signs[i] === "-") {
      sig = signs[i + 1];
      document.getElementById("equation").value = (myEquation[sig - 1] - myEquation[sig+1]);
    }
    if (signs[i] === "*") {
      sig = signs[i + 1];
      document.getElementById("equation").value = (myEquation[sig - 1] * myEquation[sig+1]);
    }
    if (signs[i] === "/") {
      sig = signs[i + 1];
      document.getElementById("equation").value = (myEquation[sig - 1] / myEquation[sig+1]);
    }
  }



  fillTestField(signs);
}

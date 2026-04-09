//The below variable has been created to store the user's input i.e. the metric he/she would like to convert
let userInputChoice = prompt("In which metric is the temperature you are converting?\n C - Celcius\n F - Fahrenheit\n K - Kelvin");

/*The below variable has been created to store the user's input i.e. the numeric value of the temperature to convert. The input is casted into an integer
so that it is not defaulted into a 'string*/
let userTemperatureNumber = Number(prompt("Please enter the number, for the temperature, that you want to convert?"));

/*The following lines of code: '10', '27' and '40' are control statements used to check the first input choice entered - so that the metric to convert to excludes
the 'first input choice entered' an option to select in lines 12, 47 and 82 .*/ 
if ((userInputChoice === "c") || (userInputChoice === "C") || (userInputChoice === "Celcius")) {

  let userMetricSelection = prompt("To which metric would you like to convert the temperature?\n F - Fahrenheit\n K - Kelvin");
  /*lines 15, 20, 28, 33, 41 and 46 are 2nd level control statements created to use the first answer entered and calculate to the requested conversion (according to metric initally entered).
  The calculation will then show (print out) the the initial input metric and value against the converted temperature metric, numeric temperature value and degree sign*/
  if (((userInputChoice === "C") || (userInputChoice === "Celcius") || (userInputChoice === "c")) && ((userMetricSelection === "F") || (userMetricSelection === "Fahrenheit") || (userMetricSelection === "f"))) {
    let fahrenheitFromCelcius = parseInt(userTemperatureNumber * 9 / 5 + 32);
    let degreeSymbol = '\u00b0';
      console.log(userTemperatureNumber + degreeSymbol + userInputChoice + " is " + fahrenheitFromCelcius + degreeSymbol + userMetricSelection);
  }
  else if (((userInputChoice === "C") || (userInputChoice === "Celcius") || (userInputChoice === "c")) && ((userMetricSelection === "K") || (userMetricSelection === "Kelvin") || (userMetricSelection === "k"))) {
    let kelvinFromCelcius = parseInt(userTemperatureNumber + 273.15);
    let degreeSymbol = '\u00b0';
      console.log(userTemperatureNumber + degreeSymbol + userInputChoice + " is " + kelvinFromCelcius + degreeSymbol + userMetricSelection);
  }
}
else if ((userInputChoice === "f") || (userInputChoice === "F") || (userInputChoice === "Fahrenheit")) {
  let userMetricSelection = prompt("To which metric would you like to convert the temperature?\n C - Celcius\n K - Kelvin");
  if (((userInputChoice === "F") || (userInputChoice === "Fahrenheit") || (userInputChoice === "f")) && ((userMetricSelection === "C") || (userMetricSelection === "Celcius") || (userMetricSelection === "c"))) {
    let celciusFromFahrenheit = parseInt((userTemperatureNumber - 32) * 5 / 9);
    let degreeSymbol = '\u00b0';
      console.log(userTemperatureNumber + degreeSymbol + userInputChoice + " is " + celciusFromFahrenheit + degreeSymbol + userMetricSelection);
  }
  else if (((userInputChoice === "F") || (userInputChoice === "Fahrenheit") || (userInputChoice === "f")) && ((userMetricSelection === "K") || (userMetricSelection === "Kelvin") || (userMetricSelection === "k"))) {
    let kelvinFromFahrenheit = parseInt((userTemperatureNumber + 459.67) * 5 / 9);
    let degreeSymbol = '\u00b0';
      console.log(userTemperatureNumber + degreeSymbol + userInputChoice + " is " + kelvinFromFahrenheit + degreeSymbol + userMetricSelection);
  }
}
else if ((userInputChoice === "k") || (userInputChoice === "K") || (userInputChoice === "Kelvin")) {
  let userMetricSelection = prompt("To which metric would you like to convert the temperature?\n C - Celcius\n F - Fahrenheit");
  if (((userInputChoice === "K") || (userInputChoice === "Kelvin") || (userInputChoice === "k")) && ((userMetricSelection === "C") || (userMetricSelection === "Celcius") || (userMetricSelection === "c"))) {
    let celciusFromKelvin = parseInt(userTemperatureNumber - 273.15);
    let degreeSymbol = '\u00b0';
      console.log(userTemperatureNumber + degreeSymbol + userInputChoice + " is " + celciusFromKelvin + degreeSymbol + userMetricSelection);
  }
  else if (((userInputChoice === "K") || (userInputChoice === "Kelvin") || (userInputChoice === "k")) && ((userMetricSelection === "F") || (userMetricSelection === "Fahrenheit") || (userMetricSelection === "f"))) {
    let fahrenheitFromKelvin = parseInt(userTemperatureNumber * 9 / 5 - 459.67);
    let degreeSymbol = '\u00b0';
      console.log(userTemperatureNumber + degreeSymbol + userInputChoice + " is " + fahrenheitFromKelvin + degreeSymbol + userMetricSelection);
  }
}
//This alternative condition is used to reject any options entered and were not requested or prompted
else {
  console.log("Please enter the correct answer to the question?");
}
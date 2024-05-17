// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// learning to think like a programmer

/* const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude([1, 122, 3], [3, -15, 1]);
console.log(amplitude); */

// Fixing Bugs

/* const measureKelvin = function () {
  const measurement = {
    type: "temperature",
    unit: "celsius",
    value: Number(prompt("Degrees celsius")),
  };
  // console.warn(measurement.value);
  // console.er133ror(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin()); */

/* const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    let currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitudeBug([2, 10, 3], [3, 1, 5]);
console.log(amplitude); */

// Coding Challenge

// Criar uma função que percorre a array, criando uma nova string que mostra o grau

// A cada loop da array, um dia deve ser adicionado a string.
// Concatenar cada nova string em uma string unica

const printForecast = function (arr) {
  let temp = "";
  for (let i = 0; i < arr.length; i++) {
    let currentDay = i + 1;
    let currentTemp = arr[i];

    temp += ` ${currentTemp}°C in ${currentDay} days`;
    return temp;
  }
};
const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

printForecast(testData1);

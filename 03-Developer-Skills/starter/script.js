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

const measureKelvin = function () {
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

console.log(measureKelvin());

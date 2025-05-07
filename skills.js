// function to covert Celsius
// to Fahrenheit

function celsiusToFahrenheit(celsius) {
    // formula to convert celsius to fahrenheit
    let fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit;
}

// Driver code
let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(
    celsius + "°C is equal to " + fahrenheit + "°F"
); // 25°C is equal to 77°F
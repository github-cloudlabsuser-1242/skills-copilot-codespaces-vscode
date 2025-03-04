// function to convert celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Driver ceode
let celsius = 37;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius} CThe temperature is ${fahrenheit} degrees Fahrenheit.`);

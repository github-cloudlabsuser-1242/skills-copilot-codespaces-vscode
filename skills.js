// function to covert Celsius to Fahrenheit
function cToF(celsius) {
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
  console.log(message);
}   // Call the function                
// Driver code
const celsius = 60;
console.log(celsius + "°C is " + cToF(celsius) + "°F");

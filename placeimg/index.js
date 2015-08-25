// Define the string
var string = document.getElementById("textString").innerHTML;

// Encode the String
var encodedString = btoa(string);
console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"

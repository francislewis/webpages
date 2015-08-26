//Get x value
var valx = document.getElementById('valx').value;

//Get y value
var valy = document.getElementById('valy').value;

// Define the string
var string = "<?xml version="1.0" encoding="UTF-8" standalone="yes"?><svg xmlns="http:/\/www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500" preserveAspectRatio="none"><defs><style type="text/css"><![CDATA[#holder_14f672961df text { fill:#AAAAAA;font-weight:bold;font-family:Arial, Helvetica, Open Sans, sans-serif, monospace;font-size:25pt } ]]></style></defs><g id="holder_14f672961df"><rect width="500" height="500" fill="#EEEEEE"/><g><text x="185.1328125" y="261.1">500x500</text></g></g></svg>";

// Encode the String
var encodedString = btoa(string);
console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"

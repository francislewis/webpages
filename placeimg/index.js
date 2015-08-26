var valx
var valy
var string
var finalString

console.log("defined");
function getValues() {

  //Get x value
  var valx = document.getElementById('valx').value;

  //Get y value
  var valy = document.getElementById('valy').value;
 console.log("got values");
 
   // Define the string
  var string = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="${valx}" height="${valy}" viewBox="0 0 ${valx} ${valy}" preserveAspectRatio="none">
  <defs><style type="text/css"><![CDATA[#holder_14f672961df text { fill:#AAAAAA;font-weight:bold;font-family:Arial, Helvetica, Open Sans, sans-serif, monospace;font-size:25pt } ]]></style></defs>
  <g id="holder_14f672961df"><rect width="${valx}" height="${valy}" fill="#EEEEEE"/><g>
  <text x="185.1328125" y="261.1">${valx}x${valy}</text></g></g></svg>`;
console.log("made string");

  
// Encode the String
var encodedString = btoa(string);
console.log("encoded");

//Add html stuff to encoded data and place in html

var finalString = `<img src="data:image/svg+xml;base64,${encodedString}">`;

document.getElementById('final').innerHTML = he.encode(finalString);

console.log("added");

}



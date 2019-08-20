"use strict"


var input = document.querySelector("input");
var button = document.querySelector("button");

button.addEventListener("click", function() {
    console.log(input.value);
    window.alert("Your entry was recieved! Email is valid for one entry! Good Luck!")
});


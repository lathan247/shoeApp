"use strict"


var input = document.querySelector("input");
var button = document.querySelector("button");

button.addEventListener("click", function() {
    console.log(input.value);
    window.alert("Your entry was recieved! Email is valid for one entry! Good Luck!")


function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

});
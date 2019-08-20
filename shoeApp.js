"use strict"

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validate() {
    var $result = $("#result");
    var email = $("#email").val();
    $result.text("");
  
    if (validateEmail(email)) {
      $result.text(email + " is valid! Good Luck! Winners announced 8/31/2019!");
      $result.css("color", "green");
    } else {
      $result.text(email + " is not valid, try again");
      $result.css("color", "red");
    }
    return false;
  }
  
  $("#validate").on("click", validate);  
  validate.on("click");
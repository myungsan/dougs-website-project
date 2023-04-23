function checkPasscode() {
    var passcode = document.getElementById("input").value;
    if (passcode == "dougs") {
      window.location.href = "2-menu.html";
    } else {
      alert("Incorrect passcode. Please try again.");
    }
  }
  
//   I want it to enter the password with a press of the keyboard button Enter
const generatePin = document.querySelector(".generate-btn");
const generatePinInput = document.getElementById("generate_pin_input");
const pinInput = document.querySelector(".pin_input");
const buttons = document.querySelectorAll(".button_number");

function randomPin() {
  generatePinInput.value = Math.floor(1000 + Math.random() * 9000);
}

generatePin.addEventListener("click", () => {
  if (pinInput.value != "" && generatePinInput.value != "") {
    displayClear();
    randomPin();
  } else {
    randomPin();
    document.querySelector(".success_notify").style.display = "none";
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (pinInput.value.length >= 4) return;
    let pin = "" + event.target.innerText;
    pinInput.value += pin;
  });
});

// clear
function displayClear() {
  pinInput.value = "";
  generatePinInput.value = "";
  document.querySelector(".notify").style.display = "none";
        document.querySelector(".action-left").style.display = "none";
}

document.querySelector(".button_clear").addEventListener("click", () => {
  displayClear();
});

document.querySelector(".button_remove").addEventListener("click", () => {
  if (pinInput.value.length < 1) return;
  pinInput.value = pinInput.value.substr(0, pinInput.value.length - 1);
});

document.querySelector(".submit-btn").addEventListener("click", () => {
  let actionLeft = document.querySelector(".action_count");

  if (generatePinInput.value == "" && pinInput.value == "") {
    displayClear();
  }

  if (generatePinInput.value != "" && pinInput.value != "") {
    //if matched
    if (generatePinInput.value == pinInput.value) {
        displayClear();
      document.querySelector(".success_notify").style.display = "block";
    } else {
      if (actionLeft.innerText >= 2) {
        actionLeft.innerText -= 1
      }else {
        displayClear()
      }
      document.querySelector(".notify").style.display = "block";
      document.querySelector(".action-left").style.display = "block";
    }
  }
});

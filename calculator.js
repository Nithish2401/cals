const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");

let currentInput = "";

// Add value to input when button is clicked
buttons.forEach(button => {
  button.addEventListener("click", () => {
    currentInput += button.getAttribute("data-value");
    display.value = currentInput;
  });
});

// Clear input
clearBtn.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

// Evaluate expression
equalBtn.addEventListener("click", () => {
  try {
    currentInput = eval(currentInput).toString();
    display.value = currentInput;
  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
});

// Keyboard input support
document.addEventListener("keydown", (e) => {
  const allowedKeys = "0123456789+-*/.=EnterBackspace";
  if (!allowedKeys.includes(e.key)) return;

  if (e.key === "Enter") {
    equalBtn.click();
  } else if (e.key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } else if (e.key === "=") {
    equalBtn.click();
  } else {
    currentInput += e.key;
    display.value = currentInput;
  }
});
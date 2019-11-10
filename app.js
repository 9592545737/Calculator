// ##########################################################
// Define variables
const num1 = document.getElementById("nm1");
const num2 = document.getElementById("nm2");
const addBtn = document.querySelector("#add");
const minusBtn = document.querySelector("#minus");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const modulusBtn = document.querySelector("#modulus");

// load all eventListeners
loadAllEventListeners();

// Call Event Listeners
function loadAllEventListeners() {
  //Add Task Event
  addBtn.addEventListener("click", function(e) {
    // Hide results
    document.getElementById("result").style.display = "none";

    // Show LOader
    document.getElementById("loading").style.display = "block";
    setTimeout(addNumbers, 2000);
    e.preventDefault();
  });

  // Subtract Task Event
  minusBtn.addEventListener("click", function(e) {
    // Hide results
    document.getElementById("result").style.display = "none";

    // Show LOader
    document.getElementById("loading").style.display = "block";
    setTimeout(subtractNumbers, 2000);
    e.preventDefault();
  });

  // MUltiply Task Event
  multiplyBtn.addEventListener("click", function(e) {
    // Hide results
    document.getElementById("result").style.display = "none";

    // Show LOader
    document.getElementById("loading").style.display = "block";
    setTimeout(multiplyNumbers, 2000);
    e.preventDefault();
  });

  // Divide Task Event
  divideBtn.addEventListener("click", function(e) {
    // Hide results
    document.getElementById("result").style.display = "none";

    // Show LOader
    document.getElementById("loading").style.display = "block";
    setTimeout(divideNumbers, 2000);
    e.preventDefault();
  });

  // Modulus Task Event
  modulusBtn.addEventListener("click", function(e) {
    // Hide results
    document.getElementById("result").style.display = "none";

    // Show LOader
    document.getElementById("loading").style.display = "block";
    setTimeout(modulusNumbers, 2000);
    e.preventDefault();
  });
}

// Function to add numbers
function addNumbers() {
  const result = document.getElementById("addResult");

  // Calculating Addition
  const addResult = parseInt(num1.value) + parseInt(num2.value);

  if (isFinite(addResult)) {
    result.value = addResult;
    // Hide results
    document.getElementById("result").style.display = "block";

    // Show LOader
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your Numbers..");
  }
}

// Function to subtract Numbers
function subtractNumbers() {
  const result = document.getElementById("addResult");

  //Calculating Subtraction
  const minusResult = parseInt(num1.value - num2.value);
  console.log(minusResult);
  if (isFinite(minusResult)) {
    result.value = minusResult;
    // Hide results
    document.getElementById("result").style.display = "block";

    // Show LOader
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your Numbers..");
  }
}

// Function to multiply numbers
function multiplyNumbers() {
  const result = document.getElementById("addResult");

  // Calculating Multiplication
  const multiplyResult = parseInt(num1.value * num2.value);

  if (isFinite(multiplyResult)) {
    result.value = multiplyResult;
    // Hide results
    document.getElementById("result").style.display = "block";

    // Show LOader
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your Numbers..");
  }
}

// Function to Divide Numbers
function divideNumbers() {
  const result = document.getElementById("addResult");

  // Calculating Multiplication
  const divideResult = num1.value / num2.value;

  if (isFinite(divideResult)) {
    result.value = divideResult;
    // Hide results
    document.getElementById("result").style.display = "block";

    // Show LOader
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your Numbers..");
  }
}

// Function to Modulus Numbers
function modulusNumbers() {
  const result = document.getElementById("addResult");

  // Calculating Multiplication
  const output = parseInt(num1.value / num2.value);
  const modulusResult = num1.value - num2.value * output;
  if (isFinite(modulusResult)) {
    result.value = modulusResult;
    // Hide results
    document.getElementById("result").style.display = "block";
    // Show LOader
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your Numbers..");
  }
}

// Show Error
function showError(error) {
  // Create Div element
  const errorDiv = document.createElement("div");

  // Get ELements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // Add ClassName
  errorDiv.className = "alert alert-danger";

  // Create a text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  //Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector(".alert").remove();
}

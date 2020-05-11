//Elements
var btnClose = document.querySelector(".ic-close");
var btnStart = document.querySelector(".btnStart");
var result = document.querySelector(".resultCard");
var claMain = document.querySelector(".cal-Main");

// input element
var heightInput = document.querySelector(".inputHeight");
var weightInput = document.querySelector(".inputWeight");

// var heightValue = heightInput.value;
// var weightValue = weightInput.value;

// Event

btnClose.addEventListener("click", closeResult, false);
btnStart.addEventListener("click", sendData, false);

function sendData() {
  //UI transition
  result.classList.remove("shrinkResult");
  claMain.classList.remove("shrinkCal");
  //get data
}

//算 BMI 值
function calculation(heightValue, weightValue) {
  var heightValue = heightInput.value;
  var weightValue = weightInput.value;
  var bmiHeight = (heightValue / 100) * (heightValue / 100);
  var bmiValue = weightValue / bmiHeight;
}

function closeResult(e) {
  // shrink animation
  result.classList.add("shrinkResult");
  claMain.classList.add("shrinkCal");
}

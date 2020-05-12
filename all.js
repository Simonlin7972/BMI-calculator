//Elements
var btnClose = document.querySelector(".ic-close");
var btnStart = document.querySelector(".btnStart");
var result = document.querySelector(".resultCard");
var claMain = document.querySelector(".cal-Main");
var bmi = document.querySelector(".resultCard__bmi");

// input element
var heightInput = document.querySelector(".inputHeight");
var weightInput = document.querySelector(".inputWeight");

var data = [];

// EventListenr

btnClose.addEventListener("click", closeResult, false);
btnStart.addEventListener("click", sendData, false);

function sendData() {
  //UI transition
  result.classList.remove("shrinkResult");
  claMain.classList.remove("shrinkCal");
  //get data
  var heightValue = heightInput.value;
  var weightValue = weightInput.value;

  var bmiHeight = (heightValue / 100) * (heightValue / 100);
  var bmiValue = weightValue / bmiHeight;

  // toFixed保留小數點後兩位
  bmi.textContent = bmiValue.toFixed(2);
}

//算 BMI 值
// function calculation() {
//   var heightValue = heightInput.value;
//   var weightValue = weightInput.value;

//   var bmiHeight = (heightValue / 100) * (heightValue / 100);
//   var bmiValue = weightValue / bmiHeight;
//   return bmiValue;
// }

function closeResult(e) {
  // shrink animation
  result.classList.add("shrinkResult");
  claMain.classList.add("shrinkCal");
}

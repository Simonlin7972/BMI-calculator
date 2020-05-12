//Elements
var btnClose = document.querySelector(".ic-close");
var btnStart = document.querySelector(".btnStart");
var result = document.querySelector(".resultCard");
var claMain = document.querySelector(".cal-Main");
var bmi = document.querySelector(".resultCard__bmi");
var bmiText = document.querySelector(".resultCard__status__text");

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

  //bmi color 顏色好像不能用變數
  switch (true) {
    case bmiValue < 18.5:
      bmi.style.color = "#36A1EF";
      bmiText.textContent = "體重過輕";
      break;

    case bmiValue > 18.5 && bmiValue < 24:
      bmi.style.color = "#0ABF57";
      bmiText.textContent = "非常理想";
      break;

    case bmiValue >= 24 && bmiValue < 30:
      bmi.style.color = "#C9991D";
      bmiText.textContent = "過重/輕度肥胖";
      break;

    case bmiValue >= 30 && bmiValue < 35:
      bmi.style.color = "#F08D31";
      bmiText.textContent = "中度肥胖";
      break;

    case bmiValue >= 35:
      bmi.style.color = "#F24E07";
      bmiText.textContent = "重度肥胖";
      break;
  }
}

function closeResult(e) {
  // shrink animation
  result.classList.add("shrinkResult");
  claMain.classList.add("shrinkCal");
}

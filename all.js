//Elements
var btnClose = document.querySelector(".ic-close");
var btnStart = document.querySelector(".btnStart");
var claMain = document.querySelector(".cal-Main");
//bmi board
var result = document.querySelector(".resultCard");
var bmi = document.querySelector(".resultCard__bmi");
var bmiText = document.querySelector(".resultCard__status__text");
var bmiComment = document.querySelector(".resultCard__comment__text");
var bmiCommentBox = document.querySelector(".resultCard__comment");

// input element
var heightInput = document.querySelector(".inputHeight");
var weightInput = document.querySelector(".inputWeight");

//history List
var bmiHistory = document.querySelector(".history__list__bmi__value");
var heightHistory = document.querySelector(".history__list__height__value");
var weightHistory = document.querySelector(".history__list__weight__value");
var searchDate = document.querySelector(".history__list__time__value");

var data = [];

// EventListenr
btnClose.addEventListener("click", closeResult, false);
btnStart.addEventListener("click", sendData, false);
weightInput.addEventListener("keydown", enterData, false);

//add data via keyboard
function enterData(e) {
  var keyEnter = e.keyCode;
  // 如果按enter的話執行 addData function
  if (keyEnter == 13) {
    sendData();
  }
}

//傳送 input 的值
function sendData() {
  //UI transition
  if (heightInput.value != [] && weightInput.value != []) {
    result.classList.add("moveResult");
    claMain.classList.add("moveCal");

    //get data
    var heightValue = heightInput.value;
    var weightValue = weightInput.value;

    var bmiHeight = (heightValue / 100) * (heightValue / 100);
    var bmiValue = weightValue / bmiHeight;

    // toFixed保留小數點後兩位
    bmi.textContent = bmiValue.toFixed(2);
  }

  //bmi color 顏色好像不能用變數
  switch (true) {
    case bmiValue < 18.5:
      bmi.style.color = "#36A1EF";
      bmiText.textContent = "體重過輕";
      bmiComment.style.color = "#36A1EF";
      bmiComment.textContent = "你太瘦了～請多吃一點！";
      bmiCommentBox.style.border = "1px solid #36A1EF";

      break;

    case bmiValue > 18.5 && bmiValue < 24:
      bmi.style.color = "#0ABF57";
      bmiText.textContent = "非常理想";
      bmiComment.style.color = "#0ABF57";
      bmiComment.textContent = "做得很好，請繼續保持！";
      bmiCommentBox.style.border = "1px solid #0ABF57";
      break;

    case bmiValue >= 24 && bmiValue < 30:
      bmi.style.color = "#C9991D";
      bmiText.textContent = "過重/輕度肥胖";
      bmiComment.style.color = "#C9991D";
      bmiComment.textContent = "要開始注意自己的飲食與體重哦！";
      bmiCommentBox.style.border = "1px solid #C9991D";
      break;

    case bmiValue >= 30 && bmiValue < 35:
      bmi.style.color = "#F08D31";
      bmiText.textContent = "中度肥胖";
      bmiComment.style.color = "#F08D31";
      bmiComment.textContent = "要開始控制飲食及開始規律運動囉！";
      bmiCommentBox.style.border = "1px solid #F08D31";
      break;

    case bmiValue >= 35:
      bmi.style.color = "#F24E07";
      bmiText.textContent = "重度肥胖";
      bmiComment.style.color = "#F24E07";
      bmiComment.textContent = "需要嚴格控制飲食及增加運動強度！";
      bmiCommentBox.style.border = "1px solid #F24E07";
      break;
  }

  // searchDate.innerHTML = historyDate;

  data.push(bmiValue, heightValue, weightValue);
  updateHistory();
}

function updateHistory(item) {
  bmiHistory.textContent = data[0].toFixed(2);
  heightHistory.textContent = data[1] + "cm";
  weightHistory.textContent = data[2] + "kg";
  // for (i < 0; i < item.length; i++) {
  // }
}

// 點擊 close 按鈕，回到初始狀態
function closeResult(e) {
  result.classList.remove("moveResult");
  claMain.classList.remove("moveCal");
  heightInput.value = "";
  weightInput.value = "";
}

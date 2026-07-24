const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const calcBtn = document.getElementById("calcBtn");
const bmiValue = document.getElementById("bmiValue");
const bmiLabel = document.getElementById("bmiLabel");

function classifyBmi(bmi) {
  if (bmi < 18.5) {
    return { text: "Thiếu cân", className: "label-thieucan" };
  } else if (bmi < 25) {
    return { text: "Bình thường", className: "label-binhthuong" };
  } else {
    return { text: "Thừa cân", className: "label-thuacan" };
  }
}

function calculateBmi() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  if (!weight || !height) {
    bmiValue.textContent = "--";
    bmiLabel.textContent = "Vui lòng nhập đủ thông tin";
    bmiLabel.className = "bmi-label";
    return;
  }
  const bmi = weight / (height * height);
  const classification = classifyBmi(bmi);
  bmiValue.textContent = bmi.toFixed(1);
  bmiLabel.textContent = classification.text;
  bmiLabel.className = "bmi-label " + classification.className;
}

calcBtn.addEventListener("click", calculateBmi);
calculateBmi();

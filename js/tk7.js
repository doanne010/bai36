function generateRandomString(length) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    result += chars[index];
  }
  return result;
}

const resultBox = document.getElementById("resultBox");
const generateBtn = document.getElementById("generateBtn");

function renderNewString() {
  resultBox.textContent = generateRandomString(8);
}

generateBtn.addEventListener("click", renderNewString);
renderNewString();

function hexToRgb(hex) {
  const cleanHex = hex.replace("#", "");
  if (!/^([0-9A-Fa-f]{6})$/.test(cleanHex)) {
    return null;
  }
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return { r, g, b };
}

const hexInput = document.getElementById("hexInput");
const convertBtn = document.getElementById("convertBtn");
const swatch = document.getElementById("swatch");
const rgbOutput = document.getElementById("rgbOutput");
const errorText = document.getElementById("errorText");

function updateResult() {
  const value = hexInput.value.trim();
  const rgb = hexToRgb(value);
  if (!rgb) {
    errorText.hidden = false;
    return;
  }
  errorText.hidden = true;
  const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  rgbOutput.textContent = rgbString;
  swatch.style.background = rgbString;
}

convertBtn.addEventListener("click", updateResult);
updateResult();

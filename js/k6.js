const mover = document.getElementById("mover");
const step = 20;
let position = 140;
const minPosition = 0;
const maxPosition = 260;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    position = Math.max(minPosition, position - step);
    mover.style.top = position + "px";
  } else if (e.key === "ArrowDown") {
    position = Math.min(maxPosition, position + step);
    mover.style.top = position + "px";
  }
});

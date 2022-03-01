import cipher from "./cipher.js";

const descripcion_button = document.getElementById("btn1");

descripcion_button.addEventListener("click", () => {
  const window1 = document.querySelector(".window1");
  const window2 = document.querySelector(".window2");
  window1.style.display = "none";
  window2.style.display = "block";
});

const buttonSend = document.getElementById("btn2");
buttonSend.addEventListener("click", capTextOffset);
function capTextOffset() {
  let offset = document.getElementById("interval").value;
  let string = document.getElementById("c1").value;
  const encodeString = cipher.encode(offset, string);
  document.getElementById("c2").value = encodeString;
}
const debuttonSend = document.getElementById("btn3");
debuttonSend.addEventListener("click", acapTextOffset);
function acapTextOffset() {
  let offset = document.getElementById("interval").value;
  let string = document.getElementById("c1").value;
  const decodeString = cipher.decode(offset, string);
  document.getElementById("c2").value = decodeString;
}
const return_button = document.getElementById("btn4");

return_button.addEventListener("click", () => {
  const window2 = document.querySelector(".window2");
  const window1 = document.querySelector(".window1");
  window2.style.display = "none";
  window1.style.display = "block";
  document.getElementById("c1").value = "";
  document.getElementById("interval").value = "";
  document.getElementById("c2").value = "";
});

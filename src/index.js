import cipher from "./cipher.js";
//declaro el boton  inicio//
const descripcion_button = document.getElementById("btn1"); //llama al boton del html//
// le damos funcionabilidad al boton inicio para que oculte la primera ventana y pase a la segunda ventana//
descripcion_button.addEventListener("click", () => {
  // Al botón se le adicióna el click y lo que pasa cuando éste evento sucede.//
  const window1 = document.querySelector(".window1");
  const window2 = document.querySelector(".window2");
  window1.style.display = "none";
  window2.style.display = "block";
});

const buttonSend = document.getElementById("btn2"); //DECLARAMOS  LA VARIABLE PARA EL BOTON CODIFICADO  Y LLAMAMOS AL BOTON DESDE EL HTML
buttonSend.addEventListener("click", capTextOffset);
function capTextOffset() {
  let offset = document.getElementById("interval").value; // NUMEROS DE CUANTO  VA A CORRER
  let string = document.getElementById("c1").value; // MENSAJE DEL USUARIO
  const encodeString = cipher.encode(offset, string); //LLAMADO CIPHER  ENCODE
  document.getElementById("c2").value = encodeString; // CAJITA FINAL CON MENSAJE CODIFICADO
}
const debuttonSend = document.getElementById("btn3"); //DECLARAMOS  LA VARIABLE PARA EL BOTON DECODIFICADO
debuttonSend.addEventListener("click", acapTextOffset);
function acapTextOffset() {
  let offset = document.getElementById("interval").value; // NUMEROS DE CUANTO  VA A CORRER
  let string = document.getElementById("c1").value; // MENSAJE DEL USUARIO
  const decodeString = cipher.decode(offset, string); //LLAMADO CIPHER
  document.getElementById("c2").value = decodeString; // CAJITA FINAL CON MENSAJE CODIFICADO
}
const return_button = document.getElementById("btn4"); //llama al boton del html//
// le damos funcionabilidad al boton para que regrese a la ventana inicial Y se limpien los espacios //
return_button.addEventListener("click", () => {
  // Al botón se le adicióna el click y lo que sucede cuando éste evento sucede.//
  const window2 = document.querySelector(".window2");
  const window1 = document.querySelector(".window1");
  window2.style.display = "none";
  window1.style.display = "block";
  document.getElementById("c1").value = "";
  document.getElementById("interval").value = "";
  document.getElementById("c2").value = "";
});

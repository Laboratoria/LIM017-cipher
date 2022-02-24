/*import { inputRequiresLabel} from  'html.hint';*/
import cipher from "./cipher.js";
//declaro el boton  inicio//
const descripcion_button=  document.getElementById("btn1");
const return_button=  document.getElementById("btn4");//llama al boton del html//
// le damos funcionabilidad al boton inicio para que oculte la primera ventana y pase a la segunda ventana//
descripcion_button.addEventListener("click",()=>{ // Al botón se le adicióna el click y lo que sucede cuando éste evento sucede.//
    const window1=document.querySelector(".window1");
    const window2=document.querySelector(".window2");
    window1.style.display="none";
    window2.style.display="block";
});
// le damos funcionabilidad al boton para que regrese a la ventana inicial//
return_button.addEventListener("click",()=>{// Al botón se le adicióna el click y lo que sucede cuando éste evento sucede.//
    const window2=document.querySelector(".window2");
    const window1=document.querySelector(".window1");
    window2.style.display="none";
    window1.style.display="block";
});


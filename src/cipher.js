const cipher = {
    encode: function  (offset , string) {
      if(string===undefined){ throw new TypeError("el valor ingresado no es una cadena de texto")}
      let messg = "";
      for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          let ascciPosition = string.charCodeAt(i);
          let offsetPosition = ((ascciPosition - 65 + parseInt(offset)) % 26) + 65;
          let palabra = String.fromCharCode(offsetPosition);
          messg = messg + palabra;
        }
      }
      console.log(messg);
      return messg;
    },
    decode: function (offset, string) {
      if(string===undefined){ throw new TypeError("el valor ingresado no es una cadena de texto")}
      let messg = "";
      for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
          let ascciPosition = string.charCodeAt(i);
          let offsetPosition = ((ascciPosition + 65 - parseInt(offset)) % 26) + 65;
          let palabra = String.fromCharCode(offsetPosition);
          messg = messg + palabra;
        }
      }
      console.log(messg);
      return messg;
    }
  };
  export default cipher;
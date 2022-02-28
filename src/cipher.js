const cipher = {
  encode: function (offset, string) {
    if (string === undefined) {
      throw new TypeError("el valor ingresado no es una cadena de texto");
    }
    if (offset == undefined || string == [] || offset == "0" || offset == "0") {
      throw new TypeError("bad arguments");
    }
    let messg = "";
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        let ascciPosition = string.charCodeAt(i);
        let offsetPosition =
          ((ascciPosition - 65 + parseInt(offset)) % 26) + 65;
        let palabra = String.fromCharCode(offsetPosition);
        messg = messg + palabra;
      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        let ascciPosition = string.charCodeAt(i);
        let offsetPosition =
          ((ascciPosition - 97 + parseInt(offset)) % 26) + 97;
        let palabra = String.fromCharCode(offsetPosition);
        messg = messg + palabra;
      } else {
        messg += string[i];
      }
    }
    return messg;
  },
  decode: function (offset, string) {
    if (string === undefined) {
      throw new TypeError("el valor ingresado no es una cadena de texto");
    }
    if (offset == undefined || string == [] || offset == "0" || offset == "0") {
      throw new TypeError("bad arguments");
    }
    let messg = "";
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        let ascciPosition = string.charCodeAt(i);
        let offsetPosition =
          ((ascciPosition + 65 - parseInt(offset)) % 26) + 65;
        let palabra = String.fromCharCode(offsetPosition);
        messg = messg + palabra;
      } else if (string.charCodeAt(i) >= 85 && string.charCodeAt(i) <= 122) {
        let ascciPosition = string.charCodeAt(i);
        let offsetPosition =
          ((ascciPosition + 85 - parseInt(offset)) % 26) + 97;
        let palabra = String.fromCharCode(offsetPosition);
        messg = messg + palabra;
      } else {
        messg += string[i];
      }
    }
    return messg;
  },
};
export default cipher;

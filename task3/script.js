// =============================================================================
// Создать html - страницу со вкладками. С левой стороны страницы отображается несколько
// вкладок, по которым можно переключаться.У каждой вкладки есть свое содержимое, но в
// один момент времени отображается содержимое только активной вкладки.

htmlbtn.onclick = function () {
  htmlText.style.display = "block";
  cssText.style.display = "none";
  jsText.style.display = "none";
};
cssbtn.onclick = function () {
  cssText.style.display = "block";
  htmlText.style.display = "none";
  jsText.style.display = "none";
};
jsbtn.onclick = function () {
  jsText.style.display = "block";
  htmlText.style.display = "none";
  cssText.style.display = "none";
};

// =============================================================================
// Разместите на странице 4 блока, как показано на рисунке.Напишите инструкции,
// меняющие цвет нижнего блока в зависимости от того, на каком из верхних
// блоков находится указатель мыши.Если указатель не находится ни над одним
// из верхних блоков, нижний блок должен быть серым.

let mainDiv = document.getElementById("mainDiv")

document.onmouseover = function (e) {
  e.target.className == "block"
    ? (mainDiv.style.backgroundColor = e.target.dataset.backgroundColor)
    : (mainDiv.style.backgroundColor = "grey");
};

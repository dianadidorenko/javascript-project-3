// =============================================================================
// Создать html - страницу для генерации случайных чисел.На странице должна быть кнопка,
// при нажатии на которую случайное целое число от 0 до 100 выводится в div.

let randomNumber = function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// console.log(randomNumber(1, 1000));

let spanItem = document.querySelector(".random-number-block-text span"),
  mainBlock = document.querySelector(".random-number-block");
// console.log(spanItem);

button.addEventListener("click", function () {
  spanItem.textContent = randomNumber(1, 1000);
});

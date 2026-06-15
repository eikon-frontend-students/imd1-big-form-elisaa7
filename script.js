// Цей скрипт керує блоком вибору кількості учасників у формі.
// Кнопки з data-minus та data-plus змінюють значення в полі input.
// Значення обмежене між 0 і 10, а повідомлення про помилку з'являється при 10.
// Вибираємо всі блоки керування кількістю учасників на сторінці.
const numberChoosers = document.querySelectorAll(".number-chooser");

// Для кожного блоку додаємо логіку збільшення/зменшення та перевірку ліміту.
numberChoosers.forEach(function (nbCh) {
  // Початкове значення для кожного окремого блоку
  let number = 0;

  // Кнопка для збільшення значення
  const incrementButton = nbCh.querySelector("[data-plus]");
  // Кнопка для зменшення значення
  const decrementButton = nbCh.querySelector("[data-minus]");
  // Поле введення, де показується поточне число
  const input = nbCh.querySelector("input");
  // Блок з повідомленням про помилку
  const errorDiv = nbCh.querySelector(".error");

  // Перевіряємо, чи потрібно показати помилку
  function verifyError(newValue) {
    // Якщо значення 10 або більше, показуємо повідомлення
    if (newValue >= 10) {
      errorDiv.classList.add("shown");
    } else {
      // Якщо значення менше 10, приховуємо повідомлення
      errorDiv.classList.remove("shown");
    }
  }

  // Збільшуємо число
  function increment() {
    number = Math.min(number + 1, 10); // обмежуємо максимум 10
    input.value = number; // оновлюємо поле введення
    verifyError(number); // перевіряємо помилку
  }

  // Зменшуємо число
  function decrement(newValue) {
    // У цьому параметрі newValue не використовується, але функція все одно працює з number
    number = Math.max(number - 1, 0); // обмежуємо мінімум 0
    input.value = number; // оновлюємо поле введення
    verifyError(number); // перевіряємо помилку
  }

  // Додаємо обробники на натискання кнопок
  incrementButton.addEventListener("click", increment);
  decrementButton.addEventListener("click", decrement);
});

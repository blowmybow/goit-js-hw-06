// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати
// і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися
// оточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй
// або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const decrEl = document.querySelector('button[data-action="decrement"]');
const incEl = document.querySelector('button[data-action="increment"]');
const spanValue = document.getElementById('value');

incEl.addEventListener('click', function (onAddNumber) {
    counterValue += 1;
    spanValue.textContent = counterValue;
});
decrEl.addEventListener('click', function (onRemoveNumber) {
    counterValue -= 1;
    spanValue.textContent = counterValue;
});



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



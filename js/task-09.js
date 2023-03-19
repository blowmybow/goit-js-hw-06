const refs = {
  container: document.querySelector('.widget'),
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
};

refs.button.addEventListener('click', () => {
  let hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  refs.span.textContent = hexColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

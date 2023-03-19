const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value.trim() !== "") {
        spanEl.textContent = event.currentTarget.value;
    } else { event.currentTarget.value === ""
        spanEl.textContent = 'Anonymous';
    }
};



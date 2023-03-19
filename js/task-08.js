const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    formData.forEach((name, value) => {
        console.log('onFormSubmit -> name', name);
        console.log('onFormSubmit -> value', value);
    })

    const {
    elements: { email, password }
} = event.currentTarget;

    if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
}
    event.currentTarget.reset();
}
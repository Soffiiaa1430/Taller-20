const colorInput = document.getElementById('color');

colorInput.addEventListener("input", cambiarColor)

function cambiarColor() {
    const input = document.getElementById('color');
    const valor = input.value;
    const header = document.getElementById('headear-target');
    const footer = document.getElementById('footer-target');

    header.style.backgroundColor = valor;
    footer.style.backgroundColor = valor;
}


const dateInput = document.getElementById('dateOfBirht')

dateInput.addEventListener('change', () => {
    const dateInput = document.getElementById('dateOfBirht').value;
    const birthDate = new Date(dateInput);
    const currentDate = new Date();
    const messageResult = document.getElementById('message-result');


    const difference = currentDate - birthDate;

    const age = Math.floor(difference / 31536000000);

    if (age >= 18) {
        messageResult.textContent = "es mayor de edad";
    } else {
        messageResult.textContent = "es menor de edad";
    }

})

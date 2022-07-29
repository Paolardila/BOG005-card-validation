import validator from './validator.js';

console.log(validator);

const boton = document.querySelector("#miBoton");
boton.addEventListener("click", function () {
    var numberCard = document.getElementById('numerot').value;

    var isOk= validator.isValid(numberCard)
    console.log(isOk);
   
});



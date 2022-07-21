import validator from './validator.js';

console.log(validator);

const boton = document.querySelector("#miBoton");
boton.addEventListener("click", function () {
    var numberCard = document.getElementById('numerot').value;

    if (numberCard && numberCard.length > 0) {
        if (valid_credit_card(numberCard)) {
            var firstFour = numberCard.substring(0, 4);
            alert('Es Valida la Tarjeta:  ' + firstFour + ' ' + '****' + ' ' + '****' + ' ' + '****');
            document.getElementById('numerot').value = '';
        } else {
            alert('No es valida la Tarjeta:  ' + numberCard + ' ' + '****' + ' ' + '****' + ' ' + '****');
            document.getElementById('numerot').value = '';
        }
    } else {
        alert('Por favor ingrese un numero ' + ':)');
    }
});



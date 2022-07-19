
const boton = document.querySelector("#miBoton");
boton.addEventListener("click", function () {
    var numberCard = document.getElementById('numerot').value;

    function valid_credit_card(value) {
        /**
         * regular expression para validar que sea un numero. :)
         */
        if (/[^0-9-\s]+/.test(value)) return false;
    
        let nCheck = 0, bEven = false;
        /**
         * reemplaza los espacios, :)
         */
        value = value.replace(/\D/g, "");

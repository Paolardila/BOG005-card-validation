const validator = {
  // ...

function valid_credit_card(value) {
  /**
   * regular expression para validar que sea un numero. :) (cualquier carácter que NO sea un dígito.)
   */
  if (/[^0-9-\s]+/.test(value)) return false;

  let nCheck = 0, bEven = false;
  /**
   * reemplaza los espacios, :) global
   */
  value = value.replace(/\D/g, "");

  /**
   * recorre la cantidad de numeros, que esta en la tarjeta.
   */
  for (var n = value.length - 1; n >= 0; n--) {

      /**
       * chartAt - UTF - 8 - devuelve un string.
       */
      var cDigit = value.charAt(n),
          nDigit = parseInt(cDigit, 10);

      /** verifica la cantidad de caracteres devueltas anteriormente en el charAt 
       * y comprueba que sea menor o igual a 9 o mayor a 9. */
      if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

      nCheck += nDigit;

      /**
       * niega el valor bEven segun entre por la condicion de la linea 30.
       */
      bEven = !bEven;
  }

  // nCheck si el valor es modulo de 10

  return (nCheck % 10) == 0;
};

export default validator;
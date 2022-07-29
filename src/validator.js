const validator = {
  // ...
  isValid: function (creditCardNumber) {
    debugger
    var numeroRevertido = creditCardNumber.split("").reverse();
    for (var i = 0; i < numeroRevertido.length; i++) {
      if (i % 2!= 0) {
      numeroRevertido[i] = numeroRevertido[i] * 2;
        if (numeroRevertido[i] > 9) {
          numeroRevertido[i] = numeroRevertido[i] -9; 
        } 
      }
    }
  },
  maskify: function (creditCardNumber) {
    return creditCardNumber
  }
}
export default validator;
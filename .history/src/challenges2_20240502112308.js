/* eslint-disable max-len */
const { validade } = require('./validade');

// Desafio 11
function generatePhoneNumber(number) {
  const validationResult = validade(number);
  if (validationResult !== 'Número de telefone válido') {
    return validationResult;
  }

  const formattedNumber = `(${number.slice(0, 2).join('')}) ${number.slice(2, 7).join('')}-${number.slice(7).join('')}`;
  console.log('number', formattedNumber);
  return formattedNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const isValid = (a, b, c) => a < b + c && b < a + c && c < a + b;
  return isValid(lineA, lineB, lineC);
}
// Desafio 13
function hydrate() {
  
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

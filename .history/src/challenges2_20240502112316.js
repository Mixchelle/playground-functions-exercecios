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
function hydrate(bebidasString) {
  const numeros = bebidasString.match(/\d+/g); // Extrai os números da string
  if (!numeros) {
    return 'Formato inválido. Use números seguidos do tipo de bebida.';
  }

  const totalCopos = numeros.reduce((soma, num) => soma + parseInt(num, 10), 0);
  return `${totalCopos} copo${totalCopos === 1 ? '' : 's'} de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

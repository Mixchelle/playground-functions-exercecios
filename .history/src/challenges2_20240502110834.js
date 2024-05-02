// Desafio 11
function generatePhoneNumber(number) {
  if (number.length !== 11) return 'Array com tamanho incorreto.';
  if (number.some((num) => num < 0 || num > 9)) return 'não é possível gerar um número de telefone com esses valores';
  number.filt
  const formattedNumber = `(${number.slice(0, 2).join('')}) ${number.slice(2, 7).join('')}-${number.slice(7).join('')}`;
  return formattedNumber;
}
// Desafio 12
function triangleCheck() {
  // seu código aqui
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

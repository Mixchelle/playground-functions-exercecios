function validade(number) {
  if (number.length !== 11) { return 'Array com tamanho incorreto.'; }

  if (number.some((num) => num < 0 || num > 9)) { return 'não é possível gerar um número de telefone com esses valores'; }
  const frequency = {};
  let repeated = false;

  number.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] >= 3) repeated = true;
  });
  if (repeated) return 'não é possível gerar um número de telefone com esses valores';
}
exports.validade = validade;

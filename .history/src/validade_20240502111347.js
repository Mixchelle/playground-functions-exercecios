function validate(number) {
  if (number.length !== 11) return 'Array com tamanho incorreto.';

  const frequency = {};

  for (let i = 0; i < number.length; i++) {
    const num = number[i];

    if (num < 0 || num > 9) return 'não é possível gerar um número de telefone com esses valores';

    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] >= 3) return 'não é possível gerar um número de telefone com esses valores';
  }

  return 'Número de telefone válido';
}

exports.validate = validate;

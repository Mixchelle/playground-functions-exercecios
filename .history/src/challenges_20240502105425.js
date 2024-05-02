// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) return true;
  return false;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(array) {
  const i = array.length - 1;
  return array[i].concat(', ', array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  const vitorias = wins * 3;
  return vitorias + ties;
}

// Desafio 6
function highestCount(array) {
  const maiorNumero = Math.max(...array);
  const result = array.reduce((count, num) => {
    if (num === maiorNumero) { count += 1; }
    return count;
  }, 0);
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const a = Math.abs(cat1 - mouse);
  const b = Math.abs(cat2 - mouse);
  if (a < b) return 'cat1';
  if (b < a) return 'cat2';
  if (a === b) return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  return array.map((n) => {
    const a = (n % 5) === 0;
    const b = (n % 3) === 0;

    if (a && b) return 'fizzBuzz';
    if (a) return 'buzz';
    if (b) return 'fizz';
    return 'bug!';
  });
}

// Desafio 9
function encode(str) {
  const vowels = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  return str.replace(/[aeiou]/g, (vowel) => vowels[vowel] || vowel);
}

function decode(str) {
  const numbers = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  return str.replace(/[12345]/g, (number) => numbers[number] || number);
}

// Desafio 10
function techList(data) {
  if (data.length === 0) return 'Vazio!';
  return data.map((iten) => {
{ tech: iten.}
  })
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
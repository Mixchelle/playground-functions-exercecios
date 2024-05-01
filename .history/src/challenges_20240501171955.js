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
  const repeticoes = array.reducer((iten, count) => {
iten[count] === iten;
    return igual
  });
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
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

// faça uma função que verifica se a primeira letra de uma string é maiuscula, retorne true ou false

// Exemplo de saida:
// checkIfTheFirstLetterIsUppercase("Brasil") --> true
// checkIfTheFirstLetterIsUppercase("mobiauto") --> false
// checkIfTheFirstLetterIsUppercase("xXx xXx") --> false
// checkIfTheFirstLetterIsUppercase("xDD") --> false
// checkIfTheFirstLetterIsUppercase("Deu Certo!") --> true

function checkIfTheFirstLetterIsUppercase(word) {
  if (word === null || word === undefined || word === "") return;

  const firstLetterToUpperCase = word[0].toUpperCase() + word.slice(1);

  const comparison = word[0] === firstLetterToUpperCase[0];

  return comparison;
}

module.exports = checkIfTheFirstLetterIsUppercase;

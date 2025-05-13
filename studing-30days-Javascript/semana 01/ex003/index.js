// Desenvolva uma função que calcula o fatorail de um número de forma recursiva:

function calcFatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * calcFatorial(n - 1);
  }

  }

console.log('O valor fatorail de n é : ', calcFatorial(5))
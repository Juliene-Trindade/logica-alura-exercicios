/* Desafios

1.    Criar uma função que exibe "Olá, mundo!" no console.
2.    Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
3.    Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
4.    Criar uma função que recebe três números como parâmetros e retorna a média deles.
5.    Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
6.    Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo 

    //////////  NÃO ESQUECER ; //////////
    //////////  NÃO ESQUECER NUMBER ////////
*/


function olaMundo() {
  console.log("Olá, mundo!");
  alert("Mensagem enviada para o console!");
}

function saudarUsuario() {
  let nome = prompt("Digite seu nome:");
  console.log(`Olá, ${nome}!`);
  alert(`Mensagem 'Olá, ${nome}!' enviada para o console!`);
}

function dobrarNumero() {
  let numero = Number(prompt("Digite um número:"));
  let dobro = numero * 2;
  alert(`O dobro de ${numero} é ${dobro}`);
}

function mediaTresNumeros() {
  let n1 = Number(prompt("Digite o primeiro número:"));
  let n2 = Number(prompt("Digite o segundo número:"));
  let n3 = Number(prompt("Digite o terceiro número:"));
  let media = (n1 + n2 + n3) / 3;
  alert(`A média é ${media}`);
}

function maiorNumero() {
  let a = Number(prompt("Digite o primeiro número:"));
  let b = Number(prompt("Digite o segundo número:"));
  let maior = a > b ? a : b;
  alert(`O maior número é ${maior}`);
}

function quadradoNumero() {
  let numero = Number(prompt("Digite um número:"));
  let resultado = numero * numero;
  alert(`${numero} multiplicado por ele mesmo é ${resultado}`);
}

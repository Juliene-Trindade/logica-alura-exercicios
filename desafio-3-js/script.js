/* Desafios

1.  Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

2.  Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

3.  Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

4.  Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

5.  Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

6.  Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
    //////////  NÃO ESQUECER ; //////////
    //////////  NÃO ESQUECER NUMBER ////////
    //////////  NÃO ESQUECER OS VALORES ////////
*/


function mostrarResultado(texto) {
  document.getElementById("resultado").innerText = texto;
}

function calcularIMC() {
  let altura = Number(prompt("Digite sua altura em metros: Ex: 1.70"));
  let peso = Number(prompt("Digite seu peso em kg:"));
  let imc = peso / (altura * altura);
  mostrarResultado(`Seu IMC é: ${imc.toFixed(2)}`); // Arredonda o número para 2 casas decimais
}

function calcularFatorial() {
  let numero = Number(prompt("Digite um número:"));
  let fatorial = 1;
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  mostrarResultado(`O fatorial de ${numero} é ${fatorial}`);
}

function converterDolar() {
  const cotacao = 4.80;
  let valorDolar = Number(prompt("Digite o valor em dólares:"));
  let valorReal = valorDolar * cotacao;
  mostrarResultado(`U$${valorDolar.toFixed(2)} equivalem a R$${valorReal.toFixed(2)}`);
}

function salaRetangular() {
  let largura = Number(prompt("Digite a largura da sala (m):"));
  let altura = Number(prompt("Digite a altura da sala (m):"));
  let area = largura * altura;
  let perimetro = 2 * (largura + altura);
  mostrarResultado(`Área: ${area.toFixed(2)} m²\nPerímetro: ${perimetro.toFixed(2)} m`);
}

function salaCircular() {
  const pi = 3.14;
  let raio = Number(prompt("Digite o raio da sala (m):"));
  let area = pi * raio * raio;
  let perimetro = 2 * pi * raio;
  mostrarResultado(`Área: ${area.toFixed(2)} m²\nPerímetro: ${perimetro.toFixed(2)} m`);
}

function tabuada() {
  let numero = Number(prompt("Digite um número para ver sua tabuada:"));
  let resultado = "";
  for (let i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\n`;
  }
  mostrarResultado(resultado);
}

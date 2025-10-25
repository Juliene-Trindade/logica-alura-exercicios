/* Desafios

1.    Crie uma lista vazia, com o nome listaGenerica.
2.    Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
3.    Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
4.    Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
5.    Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
6.    Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

    //////////  NÃO ESQUECER ; //////////
    //////////  .push .join //////////
*/

function mostrarResultado(texto) {
  document.getElementById("resultado").innerText = texto;
}

function criarListaVazia() {
  let listaGenerica = [];
  console.log(listaGenerica);
  mostrarResultado(`Lista criada: ${(listaGenerica)}`);
}

function criarListaLinguagens() {
  let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
  console.log(linguagensDeProgramacao);
  mostrarResultado(`Lista de linguagens: ${linguagensDeProgramacao.join(', ')}`);
}

function adicionarLinguagens() {
  let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
  linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
  console.log(linguagensDeProgramacao);
  mostrarResultado(`Lista atualizada: ${linguagensDeProgramacao.join(', ')}`);
}

function mostrarPrimeiro() {
  let nomes = ['Juliene', 'Carlos', 'Fernanda'];
  console.log(nomes[0]);
  mostrarResultado(`Primeiro nome: ${nomes[0]}`);
}

function mostrarSegundo() {
  let nomes = ['Juliene', 'Carlos', 'Fernanda'];
  console.log(nomes[1]);
  mostrarResultado(`Segundo nome: ${nomes[1]}`);
}

function mostrarUltimo() {
  let nomes = ['Juliene', 'Carlos', 'Fernanda'];
  let ultimo = nomes[nomes.length - 1]; // último elemento
  console.log(ultimo);
  mostrarResultado(`Último nome: ${ultimo}`);
}

<h1 align="center">🎲 Sorteador de Números</h1>

<p align="center">
  Um projeto desenvolvido para praticar lógica de programação e JavaScript.
</p>

<hr>

<h2>📌 Sobre o projeto</h2>

<p>
  O <strong>Sorteador de Números</strong> é uma aplicação desenvolvida durante
  a trilha <strong>Iniciante em Programação</strong> da Alura.
</p>

<p>
  O projeto permite que o usuário escolha a quantidade de números que deseja
  sortear e defina um intervalo entre um valor inicial e um valor final.
</p>

<h2>⚙️ Funcionalidades</h2>

<ul>
  <li>🎲 Sorteio de números aleatórios</li>
  <li>🔢 Escolha da quantidade de números</li>
  <li>🔽 Definição do valor inicial</li>
  <li>🔼 Definição do valor final</li>
  <li>🚫 Evita números repetidos</li>
  <li>⚠️ Verificação do intervalo informado</li>
  <li>🔄 Botão para reiniciar o sorteio</li>
</ul>

<h2>🛠️ Tecnologias utilizadas</h2>

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</p>

<h2>🧠 Conceitos praticados</h2>

<ul>
  <li>Variáveis</li>
  <li>Funções</li>
  <li>Estruturas condicionais</li>
  <li>Estrutura de repetição <code>for</code></li>
  <li>Estrutura de repetição <code>while</code></li>
  <li>Arrays</li>
  <li><code>includes()</code></li>
  <li><code>push()</code></li>
  <li>Manipulação do DOM</li>
  <li><code>classList</code></li>
  <li>Geração de números aleatórios</li>
</ul>

<h2>🔎 Como funciona?</h2>

<p>
  O usuário informa a quantidade de números que deseja sortear e define
  o intervalo utilizando os campos <strong>De</strong> e <strong>Até</strong>.
</p>

<p>
  O JavaScript gera um número aleatório utilizando a função
  <code>obterNumeroAleatorio()</code>.
</p>

<p>
  Antes de adicionar o número ao resultado, o programa verifica se ele
  já foi sorteado:
</p>

<pre>
sorteados.includes(numero)
</pre>

<p>
  Caso o número já exista no array, um novo número é sorteado até que
  seja encontrado um número que ainda não tenha sido utilizado.
</p>

<p>
  Depois disso, o número é adicionado ao array:
</p>

<pre>
sorteados.push(numero);
</pre>

<h2>🚀 Como executar</h2>

<p>Clone o repositório:</p>

<pre>
git clone git@github.com:kaue42paraujo-code/sorteador-numeros.git
</pre>

<p>Depois, entre na pasta:</p>

<pre>
cd sorteador-numeros
</pre>

<p>
  Por fim, abra o arquivo <code>index.html</code> no navegador.
</p>

<h2>📚 O que aprendi</h2>

<p>
  Este projeto foi desenvolvido como parte dos meus estudos de
  <strong>lógica de programação e JavaScript</strong>.
</p>

<p>
  Durante o desenvolvimento, pratiquei principalmente estruturas de
  repetição, funções, arrays, geração de números aleatórios e manipulação
  de elementos HTML através do JavaScript.
</p>

<h2>🎯 Objetivo</h2>

<p>
  Continuar desenvolvendo meus conhecimentos em programação através de
  projetos práticos, evoluindo gradualmente para aplicações mais complexas.
</p>

<hr>

<p align="center">
  Desenvolvido por <strong>Cauê Pereira</strong> 🚀
</p>

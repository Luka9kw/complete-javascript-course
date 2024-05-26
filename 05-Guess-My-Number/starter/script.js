'use strict';

// Textos da tela
const resultText = document.querySelector('.message');
const scoreText = document.querySelector('.label-score');
const highscoreText = document.querySelector('.label-highscore');
const numberBlock = document.querySelector('.number');

// Botão para executar o jogo
const btnCheck = document.querySelector('.check');
btnCheck.addEventListener('click', function () {
  winCondition();
});

let cpuChoice = Math.floor(Math.random() * 20) + 1;
const winCondition = function () {
  const playerChoice = Math.trunc(document.querySelector('.guess').value);
  // Maior que 0 e menor que 21
  if (playerChoice < 1 || playerChoice > 20) {
    resultText.textContent = '⛔️ No number!';
    // Verifica se ganhou
  } else if (playerChoice === cpuChoice) {
    resultText.textContent = '🎉 Correct Number!';
    document.body.style.background = 'rgb(96, 179, 71)';
    numberBlock.textContent = cpuChoice;
    highscoreRegist();
    // Diminui o socore se perder
  } else if (playerChoice !== cpuChoice) {
    if (score == 0) {
      resultText.textContent = '💥 You lost the game!';
    } else {
      console.log(score);
      deductScore();
      scoreText.textContent = `💯 Score: ${score}`;
      if (playerChoice > cpuChoice) {
        resultText.textContent = '📈 Too high!';
      } else {
        resultText.textContent = '📉 Too low!';
      }
    }
  }
};

let score = 20;
let highscore = '';
const redefineScore = () => (score = 20);
const deductScore = () => (score = score - 1);
const highscoreRegist = function () {
  if (score > highscore) {
    highscore = score;
    highscoreText.textContent = `🥇 Highscore: ${highscore}`;
  }
};

const resetBtn = document.querySelector('.again');
resetBtn.addEventListener('click', function () {
  score = 20;
  resultText.textContent = 'Start guessing...';
  scoreText.textContent = '💯 Score: 20';
  cpuChoice = Math.floor(Math.random() * 20) + 1;
  numberBlock.textContent = '?';
  document.body.style.background = '';
  document.querySelector('.guess').value = '';
});

// Criar o sistema que escolhe um numero aleatorio entre 1 e 20 ao clicar no botao CHECK
// Criar o seletor de numero do usuario (deve bloquear menos que 1 e acima de 20)
// Criar o verificador de vitória  caso os numeros sejam iguais
// Criar o score: O sistema começa com 20 pontos e retira 1 ponto a cada erro
// Criar o highscore: O sistema registra qual foi sua pontuação mais alta (menos erros).
// Aviso se nenhum numero estiver preenchido
// Fundo fica verde ao acertar
// Criar o high ou low: Sistema que indica se o seo valor foi muito acima ou abaixo do valor aleatório da partida.
// Botão para resetar todos os inputs para seu estado original e remover input do usuario.

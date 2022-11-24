import './index.css';
import { btnSubmit, btnRefresh, nameInput, scoreInput } from './htmlElements.js';
import { postScore, getScore } from './api';
const lodash = require('lodash');
const scoresBodyDiv = document.querySelector('.recent-scores-body');

async function createGame(url) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'no-cors',
    body: {
      "name": "Moneting.net"
    },
  });
  return response.json();
}

const loadPlayers = async () => {
  let playersList = '';
  let play = await getScore();
  console.log(play)
  play.forEach((player, index) => {
    playersList += `<p class="player ${index % 2 !== 0 ? 'grey' : ''}">${player.user}: ${player.score}</p>`;
  });
  scoresBodyDiv.innerHTML = playersList;
};

const btnSubmitEvent = () => {
  let player = {};
  player.score = Number(scoreInput.value);
  player.user = nameInput.value;
  postScore(player).then(data => console.log(data));
}

window.onload = loadPlayers;
btnSubmit.addEventListener('click', btnSubmitEvent);
btnRefresh.addEventListener('click', loadPlayers)
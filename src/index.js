import './index.css';
import { btnSubmit, btnRefresh, nameInput, scoreInput } from './htmlElements.js';
import { postScore, getScore } from './api';

const scoresBodyDiv = document.querySelector('.recent-scores-body');
const players = [
  {
    name: 'Name',
    score: 100,
  },
  {
    name: 'Name',
    score: 30,
  },
  {
    name: 'Name',
    score: 55,
  },
  {
    name: 'Name',
    score: 87,
  },
  {
    name: 'Name',
    score: 12,
  },
  {
    name: 'Name',
    score: 233,
  },
  {
    name: 'Name',
    score: 74,
  },
];

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

const loadPlayers = () => {
  let playersList = '';
  let play = getScore();
  console.log(play)
  play.forEach((player, index) => {
    playersList += `<p class="player ${index % 2 !== 0 ? 'grey' : ''}">${player.user}: ${player.score}</p>`;
  });
  scoresBodyDiv.innerHTML = playersList;
};

const btnSubmitEvent = () => {
  let player = {};
  player.user = nameInput.value;
  player.score = Number(scoreInput.value);
  postScore(player).then(data => console.log(data));
}

window.onload = loadPlayers;
btnSubmit.addEventListener('click', btnSubmitEvent);
btnRefresh.addEventListener('click', loadPlayers)
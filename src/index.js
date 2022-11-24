import './index.css';
import {
  btnSubmit, btnRefresh, nameInput, scoreInput,
} from './htmlElements.js';
import { postScore, getScore } from './api.js';

const scoresBodyDiv = document.querySelector('.recent-scores-body');

const loadPlayers = async () => {
  let playersList = '';
  const play = await getScore();
  play.forEach((player, index) => {
    playersList += `<p class="player ${index % 2 !== 0 ? 'grey' : ''}">${player.user}: ${player.score}</p>`;
  });
  scoresBodyDiv.innerHTML = playersList;
};

const btnSubmitEvent = () => {
  const player = {};
  player.score = Number(scoreInput.value);
  player.user = nameInput.value;
  postScore(player);
};

window.onload = loadPlayers;
btnSubmit.addEventListener('click', btnSubmitEvent);
btnRefresh.addEventListener('click', loadPlayers);
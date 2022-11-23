import './index.css';

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

const loadPlayers = () => {
  let playersList = '';
  players.forEach((player, index) => {
    playersList += `<p class="player ${index % 2 !== 0 ? 'grey' : ''}">${player.name}: ${player.score}</p>`;
  });
  scoresBodyDiv.innerHTML = playersList;
};

window.onload = loadPlayers;
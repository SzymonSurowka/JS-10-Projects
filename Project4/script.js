const votingForm = document.querySelector('.voting-form');
const voteOptions = document.querySelector('.vote-options');
const userName = document.querySelector('.user-name');
const userID = document.querySelector('.user-id');
const resultDiv = document.querySelector('.vote-results');

const validUserIds = new Map([
  ['Romuś', '12345678'],
  ['Stasio', '11111111'],
  ['Barti', '12341234'],
  ['Dżastina', '00000001'],
]);

const voteCounts = new Map();
voteCounts.set('Opcja 1', 0);
voteCounts.set('Opcja 2', 0);
voteCounts.set('Opcja 3', 0);

const votedUsers = new Set();

const voting = (e) => {
  e.preventDefault();
  const user = userName.value;
  const password = userID.value;
  const select = voteOptions.value;

  if (validUserIds.get(user) === password) {
    if (votedUsers.has(user)) {
      alert('już głosowałeś');
    } else {
      votedUsers.add(user);
      console.log(voteCounts.get(select));
      voteCounts.set(select, voteCounts.get(select) + 1);
    }
  } else {
    alert('nieprawidłowe dane');
  }

  alert('mam Cię na liście');

  updateResults();
};

const updateResults = () => {
  let output = '';

  for (const [option, count] of voteCounts) {
    output += `${option} : ${count} głosów.<br>`;
  }

  resultDiv.innerHTML = output;
};
votingForm.addEventListener('submit', voting);

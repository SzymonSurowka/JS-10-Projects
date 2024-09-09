const questionData = [
  ['Które z tych imion jest brzydkie?', ['Kunegunda', 'Helga', 'Wanda'], 1],
  ['Z kim graniczy Polska', ['z Madagaskarem', 'z Litwą'], 1],
];

class Question {
  #title;
  #answers;
  #correctAnswer;

  constructor(title, answers, correctAnswer) {
    this.#title = title;
    this.#answers = answers;
    this.#correctAnswer = correctAnswer;
  }
  get title() {
    return this.#title;
  }

  get answers() {
    return this.#answers;
  }

  /*   
    get correctAnswer() {
        return this.#correctAnswer;
    } 
*/

  checkAnswer(answer) {
    return this.#correctAnswer === answer;
  }
}

class Quiz {
  #questions;
  #currentQuestionIndex;
  #score;

  constructor(questions) {
    this.#questions = questions.map(
      (question) => new Question(question[0], question[1], question[2])
    );
    this.#currentQuestionIndex = 0;
    this.#score = 0;
  }

  displayQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    answersElement.textContent = '';
    this.#questions[this.#currentQuestionIndex].title2 = 'Jak tam u Ciebie?';
    questionElement.textContent =
      this.#questions[this.#currentQuestionIndex].title;

    this.#questions[this.#currentQuestionIndex].answers.forEach(
      (answer, index) => {
        const asnswerElement = document.createElement('li');
        asnswerElement.innerHTML = `<label><input type = "radio" value = ${index} name = "answer"> ${answer}</label>`;
        answersElement.appendChild(asnswerElement);
      }
    );
  }

  nextQuestion() {
    const selectedAnswer = document.querySelector(
      'input[name="answer"]:checked'
    );

    if (selectedAnswer) {
      const answer = parseInt(selectedAnswer.value);
      if (this.#questions[this.#currentQuestionIndex].checkAnswer(answer)) {
        console.log('Brawo');
        this.#score++;
      } else {
        console.log('Zła odpowiedź');
      }
      this.#currentQuestionIndex++;
      if (this.#currentQuestionIndex < this.#questions.length) {
        this.displayQuestion();
      } else {
        this.displayResult();
      }
    } else {
      alert('nie udzieliłeś odpowiedzi');
    }
  }
  displayResult() {
    const resultElement = document.querySelector('#result');
    resultElement.textContent = `Twój wynik ${this.#score} / ${
      this.#questions.length
    }`;
  }
}

const quiz = new Quiz(questionData);
quiz.displayQuestion();

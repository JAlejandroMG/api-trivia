import GetQuestionsParameters from './GetQuestionsParameters.js';
import GetScore from './GetScore.js';

const gqp = new GetQuestionsParameters();
const score = new GetScore();


export default class GetQuestions {

  getQuestions() {
      const questionsQuantity = document.getElementById('questions-number').value
      fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&category=${gqp.getCategory()}&difficulty=${gqp.getDifficulty()}&type=${gqp.getType()}`)
          .then(response => response.json())
          .then(data => this.sendDataResults(data.results))
                        //* return data.results;
  }

  sendDataResults(dataQuestions) {
    this.printCards(dataQuestions);
    score.getScore(dataQuestions);
  }

  printCards(questions) {
    const container = document.getElementById('container-cards');
    container.innerHTML = '';
    questions.forEach((question, qindex) => {
        const card = this.returnCardHTML(question, qindex);
        container.innerHTML += card;
    });
    container.innerHTML += `<button type="button" class="btn btn-primary btn-lg btn-block mt-5">Block level button</button>`;
    //* poner las preguntas y el botón de submit de las respuestas en mi página web
  }

  returnCardHTML(q, qindex) {
    const card = `<div class="card col-md-6 mt-3">
                    <div class="card-body">
                    <h5 class="card-title">${q.category}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${q.question}</h6>
                        ${this.returnAnswersHTML(q.correct_answer, q.incorrect_answers, qindex)}           
                    </div>
                </div>`
    return card;
  }

  returnAnswersHTML(correct, incorrects, qindex) {
    incorrects.push(correct);

    let incorrectHTML = '';
    incorrects.forEach((incorrect, aindex) => {
        incorrectHTML += `<div class="form-check">
                            <input class="form-check-input" type="radio" name="question-${qindex}" id="answer-${qindex}${aindex}" value="${incorrect}" required>
                            <label class="form-check-label" for="answer-${qindex}${aindex}">
                            ${incorrect}
                            </label>
                        </div>`;
    })

    return incorrectHTML;
  }

}

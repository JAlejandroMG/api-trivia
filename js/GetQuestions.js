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
  }

  sendDataResults(dataQuestions) {
    this.printCards(dataQuestions);
    score.getCorrectAnswers(dataQuestions);
  }

  printCards(questions) {
    const container = document.getElementById('container-cards');
    container.innerHTML = '';
    questions.forEach((question, qIndex) => {
        const card = this.returnCardHTML(question, qIndex);
        container.innerHTML += card;
    });
    container.innerHTML += `<button type="button" class="btn btn-primary btn-lg btn-block mt-5 mb-5 col-lg-8 col-md-8 col-sm-12">Block level button</button>`;
    //* poner las preguntas y el botón de submit de las respuestas en la página web
  }

  returnCardHTML(q, qIndex) {
    const card = `<div class="card col-lg-5 col-md-5 col-sm-12 mt-3">
                    <div class="card-body">
                    <h5 class="card-title">${q.category}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${q.question}</h6>
                        ${this.returnAnswersHTML(q.type, q.correct_answer, q.incorrect_answers, qIndex)}           
                    </div>
                </div>`
    return card;
  }

  returnAnswersHTML(type, correct, incorrects, qIndex) {
    incorrects.push(correct);
    let orderedArray = [];

    if(type === "multiple") {
      function newOrder() {
        const min = 0;
        let max = 4;      
        let index = 0;
        const newOrder = [];
      
        for(let i = 0; i < 4; i++) {
          function randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
          }
          index = (randomNumber(min, max));
          newOrder.push(incorrects[index]);
          incorrects.splice(index, 1);
          max--;
        }
      
        return newOrder;
      }

      orderedArray = newOrder()
    }

    let answersHTML = '';
    orderedArray.forEach((ordered, aIndex) => {
        answersHTML += `<div class="form-check">
                            <input class="form-check-input" type="radio" name="question-${qIndex}" id="answer-${qIndex}${aIndex}" value="${ordered}" required>
                            <label class="form-check-label" for="answer-${qIndex}${aIndex}">
                            ${ordered}
                            </label>
                        </div>`;
    })

    return answersHTML;
  }

}

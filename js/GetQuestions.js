import GetQuestionsParameters from './GetQuestionsParameters.js';
import GetScore from './GetScore.js';


const gqp = new GetQuestionsParameters();
const score = new GetScore();



export default class GetQuestions {
  getQuestions() {
    const questionsQuantity = document.getElementById('questions-number').value

    if((gqp.getCategory() === "Any category") && (gqp.getDifficulty() === "Any difficulty") && (gqp.getType() === "Any type")) {
      fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}`)
        .then(response => response.json())
        .then(data => this.sendDataResults(data.results))
    }

    else if((gqp.getCategory() === "Any category") && (gqp.getDifficulty() === "Any difficulty")) {
      fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&type=${gqp.getType()}`)
        .then(response => response.json())
        .then(data => this.sendDataResults(data.results))
    }
    
    else if((gqp.getCategory() === "Any category") && (gqp.getType() === "Any type")) {
      fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&difficulty=${gqp.getDifficulty()}`)
        .then(response => response.json())
        .then(data => this.sendDataResults(data.results))
    }

    else if((gqp.getDifficulty() === "Any difficulty") && (gqp.getType() === "Any type")) {
      fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&category=${gqp.getCategory()}`)
        .then(response => response.json())
        .then(data => this.sendDataResults(data.results))
    }

    else if((gqp.getCategory() === "Any category")) {
      fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&difficulty=${gqp.getDifficulty()}&type=${gqp.getType()}`)
        .then(response => response.json())
        .then(data => this.sendDataResults(data.results))
    }

    else if((gqp.getDifficulty() === "Any difficulty")) {
      fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&category=${gqp.getCategory()}&type=${gqp.getType()}`)
        .then(response => response.json())
        .then(data => this.sendDataResults(data.results))
    }

    else if((gqp.getType() === "Any type")) {
      fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&category=${gqp.getCategory()}&difficulty=${gqp.getDifficulty()}`)
        .then(response => response.json())
        .then(data => this.sendDataResults(data.results))
    }
    
    else {
        fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&category=${gqp.getCategory()}&difficulty=${gqp.getDifficulty()}&type=${gqp.getType()}`)
            .then(response => response.json())
            .then(data => this.sendDataResults(data.results))
    }
  }
    

  sendDataResults(dataQuestions) {
    this.printCards(dataQuestions);
    getCorrectAnswers(dataQuestions);
  }


  printCards(questions) {
    const container = document.getElementById('questions-cards');
    container.innerHTML = '';

    questions.forEach((question, qIndex) => {
        const card = this.returnCardHTML(question, qIndex);
        container.innerHTML += card;
    });
  
    container.innerHTML += `<button type="submit" class="btn btn-primary btn-lg btn-block mt-5 mb-5 col-md-6">Block level button</button>`;
    //* Poner las preguntas y el botón de submit de las respuestas en la página web
  }


  returnCardHTML(q, qIndex) {
    const card = `<div class="card col-md-6 col-lg-4 mt-3">
                    <div class="card-body">
                    <h5 class="card-title">${q.category}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${q.question}</h6>
                    ${this.returnAnswersHTML(q.correct_answer, q.incorrect_answers, qIndex, q.type)}
                  </div>`
    return card;
  }


  returnAnswersHTML(correct, incorrects, qIndex, type) {
    incorrects.push(correct);

    incorrects.sort(function(a, b){return 0.5 - Math.random()}); 

    let answersHTML = '';
    incorrects.forEach((ordered, aIndex) => {
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

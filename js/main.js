import getCategories from './filter-categories.js';
import { getCategory } from './filter-categories.js';
import { getDifficulty } from './filter-difficulty.js';
import { getType } from './filter-type.js';



function getQuestions() {
    const questionsQuantity = document.getElementById('questions-number').value
    fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&category=${getCategory()}&difficulty=${getDifficulty()}&type=${getType()}`)
        .then(response => response.json())
        .then(data => printCards(data.results))
}



function printCards(questions) {
    const container = document.getElementById('container-cards');
    container.innerHTML = '';
    questions.forEach((question, qindex) => {
        const card = returnCardHTML(question, qindex);
        container.innerHTML += card;
    });
    container.innerHTML += `<button type="button" class="btn btn-primary btn-lg btn-block mt-5">Block level button</button>`;
    // poner las preguntas en mi página web
}


function returnCardHTML(q, qindex) {
    const card = `<div class="card col-md-6 mt-3">
                    <div class="card-body">
                    <h5 class="card-title">${q.category}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${q.question}</h6>
                        ${returnAnswersHTML(q.correct_answer, q.incorrect_answers, qindex)}           

                    </div>
                </div>`
    return card;
}


function returnAnswersHTML(correct, incorrects, qindex) {
    /* const correctHTML = `<div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                            <label class="form-check-label" for="exampleRadios1">
                            ${correct}
                            </label>
                        </div>`; */
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



getCategories();

window.getQuestions = getQuestions;
window.getCategory = getCategory;
window.getDifficulty = getDifficulty;
window.getType = getType;
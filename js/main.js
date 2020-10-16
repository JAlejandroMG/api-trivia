import GetCategories from './GetCategories.js';
import GetQuestions from './GetQuestions.js';
import GetScore from './GetScore.js';


const categories = new GetCategories();
const questions = new GetQuestions();
const score = new GetScore();


//@ -------------- Aquí escuchamos el evento submit de la forma -------------- @//
document.getElementById('questions-form').addEventListener('submit', (event) => {
  event.preventDefault();
  questions.getQuestions();
})


//@ ----------- Aquí escuchamos el evento submit de las respuestas ----------- @//
document.getElementById('questions-cards').addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Al entregar respuestas...');
  score.getUserAnswers();
})


categories.getCategories();

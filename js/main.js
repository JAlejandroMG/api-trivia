import GetCategories from './GetCategories.js';
import GetQuestions from './GetQuestions.js';

const categories = new GetCategories();
const questions = new GetQuestions();


//@ -------------- Aquí escuchamos el evento submit de la forma -------------- @//
document.getElementById('questions-form').addEventListener('submit', (event) => {
  event.preventDefault();
  questions.getQuestions();
})


//@ ----------- Aquí escuchamos el evento submit de las respuestas ----------- @//
document.getElementById('questions-cards').addEventListener('submit', (event) => {
  event.preventDefault();
  questions.getQuestions();
})


categories.getCategories();

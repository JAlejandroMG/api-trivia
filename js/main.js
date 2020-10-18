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
  getUsersAnswers();
})



//@ Aquí creamos el arreglo de respuestas correctas
const correctAnswers = [];

function getCorrectAnswers(dataResults) {
  dataResults.forEach(dataResult => {
    correctAnswers.push(dataResult.correct_answer);
  });
}



//@ Aquí creamos el arreglo de las respuestas del usuario y damos el resultado
const usersAnswers = [];

function getUsersAnswers(){
  for(let i = 0; i < correctAnswers.length; i++) {  
    const answers = document.getElementsByName(`question-${i}`); 
    
    answers.forEach(answer => {
      if(answer.checked) {
        usersAnswers.push(answer.value);
      }
    })
  }

  const result = score.getScore(correctAnswers, usersAnswers)
  score.giveResults(result);
}



categories.getCategories();

window.getCorrectAnswers = getCorrectAnswers;

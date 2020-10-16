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


/* let incorrects = [0, 1, 2, 3];


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

console.log(newOrder()); */



/* if(type === 'multiple') {
      // incorrects.forEach((incorrect, index) => {
      //   const randomNumber = (0, (3-index)) => {
      //     return Math.random() * ((3-index) - 0) + 0;
      //   }
      //   // alert(randomNumber);
        
      // })
      for(let i = 0; i < 3 ; i++) {
        const min = 0;
        const max = 3-i;
        function randomNumber(min, max) {
          return Math.random() * (max - min) + min;
        }
        alert(randomNumber);
      }
      
    } */




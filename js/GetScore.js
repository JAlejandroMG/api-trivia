export default class GetScore {
  getCorrectAnswers(dataResults) {
    const correctAnswers = [];

    dataResults.forEach(dataResult => {
      correctAnswers.push(dataResult.correct_answer);
    })

    // console.log(dataResults);


    // console.log(correctAnswers);
    
    
    // this.sendCorrectAnswers(correctAnswers);
  }

/*   sendCorrectAnswers(answers) {
    this.getUserAnswers(answers);
    // score.getCorrectAnswers(dataQuestions);
  } */


  getUserAnswers() {
    /* const questionsQuantity = document.getElementsById('questions-cards').value;
    console.log(questionsQuantity); */
    alert('Aquí ando...')
  }


  /* getUserAnswers(answers) {
    const userAnswers = [];

    for(let i = 0; i < answers.length; i++) {
      
            const answer = document.getElementsByName(`question-${i}`); 
              
            for(j = 0; j < 4; j++) { 
                if(answer[j].checked) {
                  userAnswers.push(answer[j].value);
                }
            }
    }
    console.log(userAnswers);
  }*/
}

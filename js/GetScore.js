export default class GetScore {
  getScore(correctAnswers, usersAnswers) {
    let score = 0;
    let counter = 0;
    correctAnswers.forEach((correctAnswer,index) => {
      correctAnswer === usersAnswers[index] ? counter++ : counter;
    })
    return score = Math.round((counter / correctAnswers.length)*100);
  }

  giveResults(result) {
    const container = document.getElementById('questions-cards');

    if(result === 100) {
      container.innerHTML = ` <div class="alert alert-success" role="alert">
                              <h4 class="alert-heading">Well done!</h4>
                              <p>Excellent you've got <strong>${result}</strong>!!!</p>
                              <hr>
                              <p class="mb-0">Keep it up!.</p>
                            </div>`;
    }
    else if(result < 100 && result >= 40) {
      container.innerHTML = ` <div class="alert alert-warning" role="alert">
                              <h4 class="alert-heading">Well...</h4>
                              <p>You're not doing so bad, you've got <strong>${result}</strong>!!!</p>
                              <hr>
                              <p class="mb-0">Keep studying!.</p>
                            </div>`;
    }
    else {
      container.innerHTML = ` <div class="alert alert-danger" role="alert">
                              <h4 class="alert-heading">You are out of the game!!!</h4>
                              <p>Not to much to say, you've got <strong>${result}</strong>!!!</p>
                              <hr>
                              <p class="mb-0">You need to hurry up!!!.</p>
                            </div>`;
    }
  }
} 

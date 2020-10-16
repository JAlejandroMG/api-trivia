export default class GetQuestionsParameters {
  
  getCategory() {
    const category = document.getElementById('questions-categories').value
    return category;
  }

  getDifficulty() {
    const difficulty = document.getElementById('questions-difficulty').value
    return difficulty;
  }

  getType() {
    const type = document.getElementById('questions-type').value
    return type;
  }

}

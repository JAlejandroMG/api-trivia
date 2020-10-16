export default class GetCategories {

  getCategories() {
      fetch(`https://opentdb.com/api_category.php`)
      .then(response => response.json())
      .then(data => this.printGetCategories(data.trivia_categories))
  }

  printGetCategories(categories) {
    
      const container = document.getElementById('questions-categories');
      container.innerHTML = '';
      container.innerHTML += `<option>Any category</option>`
      categories.forEach(category => {
          const list = this.returnGetCategory(category);
          container.innerHTML += list;
      });
  }

  returnGetCategory(category) {
    const list = `<option value="${category.id}">${category.name}</option> `;
    return list;
  }

}

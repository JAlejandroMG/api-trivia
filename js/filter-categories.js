//Programmer Jairo Felipe Nieto

function getCategories() {
  fetch(`https://opentdb.com/api_category.php`)
  .then(response => response.json())
  .then(data => printGetCategories(data.trivia_categories))
}

function printGetCategories(categorys) {

  const container = document.getElementById('questions-categories');
  container.innerHTML = '';
  categorys.forEach(category => {
      const list = returnGetCategory(category);
      container.innerHTML += list;
  });

  
}

function returnGetCategory(category) {
  const list = `<option value="${category.id}">${category.name}</option> `;
  return list;
}



export default getCategories;
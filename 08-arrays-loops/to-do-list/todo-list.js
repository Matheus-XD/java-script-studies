
let todoList = []

function addToList() {
  let todo = document.querySelector('.js-name-input');
  todoList.push(todo.value)
  todo.value = '';
  console.log(todoList);
  

  let html = ''
  for (let i = 0; i < todoList.length; i++) {
    html += `<p>${todoList[i]}</p>`  
  }

  document.querySelector('.js-todo-list').innerHTML = html
}
    
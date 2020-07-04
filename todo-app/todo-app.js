let todos = getSavedTodos();

// search input
const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters);
    
// target search input
document.querySelector('#search-todo').addEventListener('input', function(e) {
        filters.searchText = e.target.value
        renderTodos(todos, filters);
    })

// target form
document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault();
    todos.push({
        id: uuidv4(),
        text: e.target.elements.newTodo.value,
        completed: false
    })
    saveTodos();
    renderTodos(todos, filters);
    e.target.elements.newTodo.value = '';
})

// target hide-completed
document.querySelector('#hide-completed').addEventListener('click', function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters);
})
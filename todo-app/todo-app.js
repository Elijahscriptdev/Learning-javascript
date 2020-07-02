
let todos = [
//     {
//     text: 'Order cat food',
//     completed: false
// }, {
//     text: 'clean the kitchen',
//     completed: true
// }, {
//     text: 'Buy food',
//     completed: true
// }, {
//     text: 'Do work',
//     completed: false
// }, {
//     text: 'Exercise',
//     completed: true
// }
]

// search input
const filters = {
    searchText: '',
    hideCompleted: false
}

const todoJSON = localStorage.getItem('todos')
if(todoJSON !== null){
    todos = JSON.parse(todoJSON)
}
// render filtered todos
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
        return searchTextMatch && hideCompletedMatch;
    })

    const incompleteTodo = filteredTodos.filter(function (todo) {
        return !todo.completed;
    })
    
    document.querySelector('#todos').innerHTML = ''
    
    const h2 = document.createElement('h2');
    h2.textContent = `You have ${incompleteTodo.length} todos left`;
    document.querySelector('#todos').appendChild(h2);

    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p');
        p.textContent = todo.text;
        document.querySelector('#todos').appendChild(p);
    })
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
        text: e.target.elements.newTodo.value,
        completed: false
    })
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos, filters);
    e.target.elements.newTodo.value = '';
})

// target hide-completed
document.querySelector('#hide-completed').addEventListener('click', function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters);
})
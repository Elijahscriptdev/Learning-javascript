// const { default: generate } = require("@babel/generator");

// fetch existing to from local storage
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem('todos')
    if (todoJSON !== null) {
        return JSON.parse(todoJSON)
    } else {
        return [];
    }
}

// save todos to local storage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
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

    document.querySelector('#todos').appendChild(generateIcompleteTodoMessage(incompleteTodo));

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo));
    })
}

// handle dom elements for each todo
const generateTodoDOM = (todo) => {
    const p = document.createElement('p');
    p.textContent = todo.text;
    return p;
}

// handle incomplete todo message
const generateIcompleteTodoMessage = (incompleteTodo) => {
    const h2 = document.createElement('h2');
    h2.textContent = `You have ${incompleteTodo.length} todos left`;
    return h2
}
// const { Console } = require("console");

let notes = [
//     {
//     title: 'my next food',
//     body: 'I would love starch and banga soup'
// }, {
//     title: 'hobbies to work on',
//     body: 'writing skill'
// }, {
//     title: 'house modification',
//     body: 'get a new seat'
// }
]

// store the filters in an obj
const filters = {
    searchText: ''
}

// const user = {
//     name: 'seth',
//     age: 31
// }

// const userData = JSON.stringify(user);
// console.log(userData);
// localStorage.setItem('user', userData);

// const userData = localStorage.getItem('user');
// console.log(userData);
// const users = JSON.parse(userData);
// console.log(`${users.name} is ${users.age}`);

const noteJSON = localStorage.getItem('notes')

if(noteJSON !== null){
    notes = JSON.parse(noteJSON)
}

document.querySelector('#create-note').addEventListener('click', function(e){
    notes.push({
        title: '',
        description: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes(notes, filters);
})

// render the notes data on the browser
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    document.querySelector('#notes-con').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p');
        if(note.title.length > 0){
            noteEl.textContent = note.title;
        }else{
            noteEl.textContent = 'unamed note';
        }
        document.querySelector('#notes-con').appendChild(noteEl);
    })
}
renderNotes(notes, filters);

// target search input
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters);
})

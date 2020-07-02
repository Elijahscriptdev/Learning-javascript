// const { Console } = require("console");

const notes = getSavedNotes();

// store the filters in an obj
const filters = {
    searchText: ''
}

// create note andset to local storage
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

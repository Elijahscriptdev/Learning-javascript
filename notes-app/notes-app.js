const notes = [{
    title: 'my next food',
    body: 'I would love starch and banga soup'
}, {
    title: 'hobbies to work on',
    body: 'writing skill'
}, {
    title: 'house modification',
    body: 'get a new seat'
}]

// store the filters in an obj
const filters = {
    searchText: ''
}

// render the notes data on the browser
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    document.querySelector('#notes-con').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        document.querySelector('#notes-con').appendChild(noteEl);
    })
}
renderNotes(notes, filters);

// target search input
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters);
})

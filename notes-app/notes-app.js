const notes = getSavedNotes();

// store the filters in an obj
const filters = {
    searchText: ''
}

// create note andset to local storage
document.querySelector('#create-note').addEventListener('click', function(e){
    notes.push({
        id: uuidv4(),
        title: '',
        description: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes(notes, filters);
})

renderNotes(notes, filters);

// target search input
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters);
})

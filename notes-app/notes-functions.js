// read notes from local storage
const getSavedNotes = () => {
    const noteJSON = localStorage.getItem('notes')

    if (noteJSON !== null) {
        return JSON.parse(noteJSON);
    }else{
        return [];
    }
}

// Generating the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('p');
    if (note.title.length > 0) {
        noteEl.textContent = note.title;
    } else {
        noteEl.textContent = 'unamed note';
    }
    return noteEl;
}

// render the notes data on the browser
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    document.querySelector('#notes-con').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes-con').appendChild(noteEl);
    })
}
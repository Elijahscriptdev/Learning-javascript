// read notes from local storage
const getSavedNotes = () => {
    const noteJSON = localStorage.getItem('notes')

    if (noteJSON !== null) {
        return JSON.parse(noteJSON);
    }else{
        return [];
    }
}

// remove note
const removeNote = (id) => {
    const noteIndex = notes.findIndex(function(note){
        // console.log(note.id);
        console.log(id);

        return note.id === id;
    })

    if(noteIndex > -1){
        notes.splice(noteIndex, 1)
    }
}

// Generating the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('div');
    const textEl = document.createElement('span');
    const button = document.createElement('button');

    // setup remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', function(){
        removeNote(note.id)
        // SavedNotes(notes)
        localStorage.setItem('notes', JSON.stringify(notes));
        renderNotes(notes, filters)        
    })

    // setup note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title;
    } else {
        textEl.textContent = 'unamed note';
    }
    noteEl.appendChild(textEl);
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
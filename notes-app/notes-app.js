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
document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters);
})

// target form
document.querySelector('#name-form').addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e.target.elements.firstName.value);
    e.target.elements.firstName.value = '';
})

// document.querySelector('#create-note').addEventListener('click', function(e){
//     e.target.textContent = 'button clicked'
// })

// document.querySelector('#remove-note').addEventListener('click', function (e) {
//     // e.target.textContent = 'deleted'
//     // console.log('deleted');
//     document.querySelectorAll('.note').forEach(function(note){
//         note.remove();
//     })
// })

// const p = document.querySelector('h1');
// p.remove();

// const ps = document.querySelectorAll('p');

// ps.forEach(function(p){
//     // p.remove();
//     // console.log(p.textContent)
//     p.textContent = '**********'
//     // console.log(p.textContent)
// })

// // add a new element
// const newP = document.createElement('p');
// newP.textContent = 'added from javascript'
// document.querySelector('body').appendChild(newP);
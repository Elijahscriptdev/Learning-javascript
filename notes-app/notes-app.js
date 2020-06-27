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

document.querySelector('#create-note').addEventListener('click', function(e){
    e.target.textContent = 'button clicked'
})

document.querySelector('#remove-note').addEventListener('click', function (e) {
    // e.target.textContent = 'deleted'
    // console.log('deleted');
    document.querySelectorAll('.note').forEach(function(note){
        note.remove();
    })
})
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
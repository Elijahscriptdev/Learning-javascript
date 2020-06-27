const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'clean the kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]


const incompleteTodo = todos.filter(function(todo){
    return !todo.completed;
})
// console.log(incompleteTodo.length);

const h2 = document.createElement('h2');
h2.textContent = `You have ${incompleteTodo.length} todos left`;
document.querySelector('body').appendChild(h2);

todos.forEach(function(todo){
    // console.log(todo.text);
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('body').appendChild(p);
})



// const thes = document.querySelectorAll('p');
// thes.forEach(function(p){
//     // if(p.textContent == 'the'){
//     //     p.remove();
//     //     console.log(p);
//     // }
//     if (p.textContent.includes('the')) {
//         p.remove();
//         console.log(p);
//     }
//     // console.log(thes);
// })

// new todo creation
document.querySelector('#add-todo').addEventListener('click', function(){
    console.log('new todo added');
})
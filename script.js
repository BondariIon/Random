//Colors array
let colors = ['blue', 'yellow', 'black', 'brown', 'orange', 'Red', 'Green', 'Purple', 'Pink', 'Teal', 'Tal'];

//get button
let button = document.getElementById('button');

//add event listener
button.addEventListener('click', function () {
    //rondomizer
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    //get container
    let container = document.getElementById('container');

    container.style.background = randomColor;
})
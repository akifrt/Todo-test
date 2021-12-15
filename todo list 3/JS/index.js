



document.querySelector('button').addEventListener('click', myClick);


function myClick() {
    //console.log('work');
    // get input
    // input - value
    let a = document.querySelector('.input').value;
    console.log(a);
    document.querySelector('.out').innerHTML += a;
}

// value - получить текст из input
// innerHTML - получить - записать текст в парный тег
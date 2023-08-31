const buttons = document.querySelectorAll('button')
// const pluses = buttons.querySelector('.plus')

function colorCheck(btn) {
    if (btn.classList.contains('blue')) {
        btn.classList.toggle('blue-active');
    } else {
        btn.classList.toggle('green-active');
    }
}

buttons.forEach(button =>
    button.addEventListener('click', (e) => {
        e.preventDefault();
        var plus = button.firstChild
        var location = button.lastChild

        colorCheck(button);

        button.classList.toggle('btn-active');
        plus.classList.toggle('plus-active')
        plus.classList.toggle('plus-vertical')
        location.classList.toggle('location-active')
    })
);
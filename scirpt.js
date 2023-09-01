const buttons = document.querySelectorAll('button')
const bg = document.querySelector('.shadow');

document.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    
    var plus = e.target.firstChild;
    var location = e.target.lastChild;
    buttonsArray = Array.from(buttons)

    if (target.tagName == 'BUTTON') {
        if (e.target.classList.contains('blue')) {
            e.target.classList.toggle('blue-active')
        } else {
            e.target.classList.toggle('green-active')
        }
        e.target.classList.toggle('btn-active');
        plus.classList.toggle('plus-active')
        plus.classList.toggle('plus-vertical')
        location.classList.toggle('location-active')
    }
    
    if (target.tagName == 'DIV') {
        buttonsArray.forEach(button => {
            button.classList.remove('btn-active')
            button.firstChild.classList.remove('plus-active')
            button.firstChild.classList.add('plus-vertical')
            button.lastChild.classList.remove('location-active')
            if (button.classList.contains('blue-active')) {
                button.classList.remove('blue-active')
            } else {
                button.classList.remove('green-active')
            }
        })  
    }
})

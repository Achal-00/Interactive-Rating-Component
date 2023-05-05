const btn = document.getElementsByClassName('button');
var value;
btn[0].addEventListener('click', () => {
    value = 1;
    btn[0].classList.toggle('pressedClass');
    btn[1].classList.remove('pressedClass');
    btn[2].classList.remove('pressedClass');
    btn[3].classList.remove('pressedClass');
    btn[4].classList.remove('pressedClass');
});
btn[1].addEventListener('click', () => {
    value = 2;
    btn[1].classList.toggle('pressedClass');
    btn[0].classList.remove('pressedClass');
    btn[2].classList.remove('pressedClass');
    btn[3].classList.remove('pressedClass');
    btn[4].classList.remove('pressedClass');
});
btn[2].addEventListener('click', () => {
    value = 3;
    btn[2].classList.toggle('pressedClass');
    btn[0].classList.remove('pressedClass');
    btn[1].classList.remove('pressedClass');
    btn[3].classList.remove('pressedClass');
    btn[4].classList.remove('pressedClass');
});
btn[3].addEventListener('click', () => {
    value = 4;
    btn[3].classList.toggle('pressedClass');
    btn[0].classList.remove('pressedClass');
    btn[1].classList.remove('pressedClass');
    btn[2].classList.remove('pressedClass');
    btn[4].classList.remove('pressedClass');
});
btn[4].addEventListener('click', () => {
    value = 5;
    btn[4].classList.toggle('pressedClass');
    btn[0].classList.remove('pressedClass');
    btn[1].classList.remove('pressedClass');
    btn[2].classList.remove('pressedClass');
    btn[3].classList.remove('pressedClass');
});

const subBtn = document.querySelector('.submit');
subBtn.addEventListener('click', () => {
    const cont = document.querySelector('.main-container');
    const afterCont = document.querySelector('.after-container');
    const res = document.querySelector('.result');
    if (value == undefined) {
        alert("Select a rating!");
    } else {
        cont.style.display = "none";
        afterCont.style.display = "grid";
        res.innerText = `You selected ${value} out of 5`;
    }
});

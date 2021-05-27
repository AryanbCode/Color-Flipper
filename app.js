const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let randNum = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randNum];
    color.textContent = colors[randNum];
})
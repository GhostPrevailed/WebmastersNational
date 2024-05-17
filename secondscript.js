const container = document.querySelector('.container');
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const content3 = document.getElementById('content3');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

let currentContent = 1;

leftArrow.addEventListener('click', () => {
    if (currentContent > 1) {
        currentContent--;
        container.scrollTo({ left: container.clientWidth * (currentContent - 1), behavior: 'smooth' });
    }
});

rightArrow.addEventListener('click', () => {
    if (currentContent < 3) {
        currentContent++;
        container.scrollTo({ left: container.clientWidth * (currentContent - 1), behavior: 'smooth' });
    }
});

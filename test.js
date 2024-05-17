let currentContentIndex = 0;
const contents = document.querySelectorAll('.content');

function showContent(direction) {
    contents[currentContentIndex].classList.remove('active');
    currentContentIndex = (currentContentIndex + direction + contents.length) % contents.length;
    contents[currentContentIndex].classList.add('active');
}

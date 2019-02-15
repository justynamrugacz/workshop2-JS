var previous = document.querySelector('#prevPicture');
var next = document.querySelector('#nextPicture');
var allLi = document.querySelectorAll('li');

var currentImgIndex = 0;
allLi[currentImgIndex].classList.add('visible');


previous.addEventListener('click', function () {
    console.log('jestem kliknięty');
    if (currentImgIndex > 0) {
        allLi[currentImgIndex].classList.remove('visible');
        currentImgIndex--;
        allLi[currentImgIndex].classList.add('visible');
    }
})

next.addEventListener('click', function () {
    console.log('ja też jestem kliknięty');
    if (currentImgIndex < allLi.length - 1) {
        allLi[currentImgIndex].classList.remove('visible');
        currentImgIndex++;
        allLi[currentImgIndex].classList.add('visible');
    }
})
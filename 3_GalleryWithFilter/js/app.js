var allImg = document.querySelectorAll('img');
var input = document.querySelector('#tagInput');
var showButton = document.querySelector('#showButton');
var hideButton = document.querySelector('#hideButton');


showButton.addEventListener('click', function () {
    for (var img of allImg) {
        var tag = img.dataset.tag;
        if (tag.includes(input.value)) {
            img.classList.remove('invisible');
        } else {
            img.classList.add("invisible");
        }
    }
})

hideButton.addEventListener('click', function () {
    for (var img of allImg) {
        var tag = img.dataset.tag;
        if (tag.includes(input.value)) {
            img.classList.add('invisible');
        } else {
            img.classList.remove("invisible");
        }
    }
})
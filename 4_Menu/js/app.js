
var mainUl = document.querySelector('ul').children;
console.log(mainUl);

var firstLi = mainUl[0];
var secondLi = mainUl[1];
var thirdLi = mainUl[2];
var fourthtLi = mainUl[3];

firstLi.addEventListener('mouseover', function () {
    var innerList = mainUl[2].querySelector('ul');
    if (innerList !== null) {
        innerList.style.display = "block";
        console.log('czesc1');
    }
})
firstLi.addEventListener('mouseout', function () {

})

secondLi.addEventListener('mouseover', function () {
    var innerList = mainUl[1].querySelector('ul');
    if (innerList !== null) {
        innerList.style.display = "block";
        console.log('czesc3');
    }
})
secondLi.addEventListener('mouseout', function () {
    var innerList = mainUl[1].querySelector('ul');
    innerList.style.display = "none";
})

thirdLi.addEventListener('mouseover', function () {
    var innerList = mainUl[2].querySelector('ul');
    if (innerList !== null) {
        innerList.style.display = "block";
        console.log('czesc4');
    }
})
thirdLi.addEventListener('mouseout', function () {

})

fourthtLi.addEventListener('mouseover', function () {
    var innerList = mainUl[3].querySelector('ul');
    if (innerList !== null) {
        innerList.style.display = "block";
        console.log('czesc4');
    }
})
fourthtLi.addEventListener('mouseout', function () {
    var innerList = mainUl[3].querySelector('ul');
    innerList.style.display = "none";
})

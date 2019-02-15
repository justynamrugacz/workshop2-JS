


var allLi = document.querySelectorAll('li');
var body = document.querySelector('body');


const galleryHtml = body.innerHTML;



for (var i = 0; i < allLi.length; i++) {
  allLi[i].addEventListener('click', function () {
    console.log(this.firstChild.getAttribute('src'));
    var src = this.firstChild.getAttribute('src');
    var fullScreen = `<div class="fullScreen"><img src="${src}">
   <button class="close">Close</button>
 </div>`;
    body.innerHTML = fullScreen;
    var button = document.querySelector('button');
    button.addEventListener('click', function () {
      body.innerHTML = galleryHtml;
    })

  })

}

// zdarzenie full screen dzaiła jednorazowo

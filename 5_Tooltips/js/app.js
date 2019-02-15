



var allTooltips = document.querySelectorAll('.tooltip');


for (var toolTip of allTooltips) {
  toolTip.addEventListener('mouseover', function (e) {
    console.log(e.target.dataset.text);
    var textTool = document.createElement('span');
    textTool.classList.add('tooltipText');
    textTool.innerHTML = e.target.dataset.text;
    e.target.appendChild(textTool);
  })
  toolTip.addEventListener('mouseout', function (e) {
    e.target.removeChild(e.target.lastChild);

  })
}
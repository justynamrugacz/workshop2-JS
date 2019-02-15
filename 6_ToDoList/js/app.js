
document.addEventListener("DOMContentLoaded", function () {
    var listOfTasks = document.querySelector('#taskList');
    var addTask = document.querySelector('#addTaskButton');
    var ul = document.querySelector('ul');
    var finishedTasks = document.querySelector('#removeFinishedTasksButton');

    var unfinishedTasks = document.createElement('p');
    unfinishedTasks.innerHTML = 'Zadania do zrobienia: ';

    var boldCount = document.createElement('b');
    unfinishedTasks.appendChild(boldCount);

    ul.parentNode.insertBefore(unfinishedTasks, ul);

    var counter = 0;
    boldCount.innerHTML = counter;

    function increaseTask() {
        counter++;
        boldCount.innerHTML = counter;
    }

    function decreaseTask() {
        counter--;
        boldCount.innerHTML = counter;
    }

    var inputMain = document.querySelector('#taskInput');
    var inputPriority = document.createElement('input');
    inputPriority.type = "number";
    inputPriority.min = 0;
    inputPriority.max = 10;

    inputMain.parentNode.insertBefore(inputPriority, inputMain.nextSibling);

    var arrayTasks = [];

    function sortTasks() {
        function sortDescending(a, b) {
            return b.priority - a.priority;
        }

        arrayTasks.sort(sortDescending);
    }

    function deleteTask(li) {
        var id = Number(li.dataset.id);

        arrayTasks = arrayTasks.filter(task => task.id != id);
    }
    function displayTasks() {
        ul.innerHTML = '';

        for (var task of arrayTasks) {

            var li = document.createElement('li');
            var newLi = ul.appendChild(li);
            newLi.dataset.id = task.id;
            newLi.dataset.completed = false;

            var priorityTag = document.createElement('b');
            priorityTag.innerHTML = '[' + task.priority + ']';
            priorityTag.style.color = 'blue';

            var h1Tag = document.createElement('h1');
            h1Tag.appendChild(priorityTag);
            h1Tag.innerHTML += " " + task.text;

            var buttonDelet = document.createElement('button');
            buttonDelet.innerHTML = 'delete'

            var buttonComplet = document.createElement('button');
            buttonComplet.innerHTML = 'complete'

            var addEl = function () {
                var nodes = [h1Tag, buttonDelet, buttonComplet];

                for (var i = 0; i < nodes.length; i++) {
                    newLi.appendChild(nodes[i]);
                }

            };

            addEl();

            buttonComplet.addEventListener('click', function () {
                var h1 = this.parentNode.firstChild;
                if (this.parentNode.dataset.completed === 'true') {
                    h1.style.color = 'black';
                    this.parentNode.dataset.completed = false;
                    increaseTask();
                } else {
                    h1.style.color = 'red';
                    this.parentNode.dataset.completed = true;
                    decreaseTask();
                }


            })

            buttonDelet.addEventListener('click', function () {
                deleteTask(this.parentNode);
                if (this.parentNode.dataset.completed == 'false') {
                    decreaseTask();
                }
                this.parentNode.remove();
            });

        }
    }

    addTask.addEventListener('click', function () {
        var input = document.querySelector('#taskInput').value;

        if (input.length < 5 || input.length > 100) {
            return;
        }

        increaseTask();
        var elementId = new Date().valueOf();
        arrayTasks.push({ priority: inputPriority.value, text: input, id: elementId })
        sortTasks();
        displayTasks();

        var inputControl = document.querySelector('#taskInput');
        inputControl.value = '';
        inputPriority.value = '';
    })


    finishedTasks.addEventListener('click', function () {
        var allLi = document.querySelectorAll('li');
        for (var li of allLi) {
            if (li.dataset.completed == 'true') {
                li.remove();
                deleteTask(li);
            }
        }
    })

    inputPriority.addEventListener('change', function () {
        var min = parseInt(this.min);
        var max = parseInt(this.max);

        if (this.value > max) {
            this.value = max;
        }
        else if (this.value < min) {
            this.value = min;
        }
    })

})
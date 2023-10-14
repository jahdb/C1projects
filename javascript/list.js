document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');

    addTaskButton.addEventListener('click', function () {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            const taskLabel = document.createElement('span');
            taskLabel.textContent = taskText;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';

            deleteButton.addEventListener('click', function () {
                li.remove();
            });

            li.appendChild(checkbox);
            li.appendChild(taskLabel);
            li.appendChild(deleteButton);

            taskList.appendChild(li);

            newTaskInput.value = '';
        }
    });

    newTaskInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
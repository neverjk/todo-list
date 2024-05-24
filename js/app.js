// js/app.js
document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;
    li.className = 'task';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        this.parentElement.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById('tasks').appendChild(li);

    document.getElementById('new-task').value = '';
});

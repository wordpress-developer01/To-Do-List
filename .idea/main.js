const TaskInput = document.getElementById('task');
const TaskList = document.getElementById('task-list');

document.addEventListener('click', function(e) {
    e.preventDefault();
    const text = TaskInput.value.trim();
    if(text !== '') {
        addTask(text);
        TaskInput.value = '';
    }
});

function addTask(text) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `<span>${text}</span>`;

    TaskList.appendChild(li);
    saveTask();
    updateStatus();
}
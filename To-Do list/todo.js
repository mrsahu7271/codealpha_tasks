// Add a new task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Add complete task functionality
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Add delete button to each task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(deleteButton);

        // Append the new task to the list
        taskList.appendChild(li);

        // Clear the input
        taskInput.value = '';
    }
}

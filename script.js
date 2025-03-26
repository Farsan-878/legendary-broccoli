function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${taskInput.value} <button class="delete" onclick="deleteTask(this)">X</button>`;

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input field
}

function deleteTask(button) {
    button.parentElement.remove();
}

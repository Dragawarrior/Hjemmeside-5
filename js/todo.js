let taskList = document.querySelector("#task-list")

function createNewTask () {
    let inputTitle = document.querySelector("#task-title")

    let taskTitle = inputTitle.value

    let liElement = document.createElement("li")

    liElement.innerHTML =`
    <div class="task">
        <h2 class="t-text">${taskTitle}</h2>
        <button>Delete Task</button>
    </div>
    `

    function deleteTask () {
        liElement.remove()
    }

    let deleteButton = liElement.querySelector("button")
    deleteButton.addEventListener("click", deleteTask)

    taskList.append(liElement)
}

let addTaskButton = document.querySelector("#add-task")
addTaskButton.addEventListener("click", createNewTask)
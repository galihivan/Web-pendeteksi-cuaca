document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const priority = document.getElementById("priority");
    const deadlineInput = document.getElementById("deadline");
    const toDoList = document.getElementById("toDoList");
    const doneList = document.getElementById("doneList");
    const toDoForm = document.getElementById("toDoForm");
    const clearAll = document.getElementById("clearAll");
  
    // Add task
    toDoForm.addEventListener("submit", function(e) {
      e.preventDefault();
      if (taskInput.value.trim() === "" || !deadlineInput.value) return;
  
      const taskText = taskInput.value;
      const taskPriority = priority.value;
      const taskDeadline = deadlineInput.value;
  
      const listItem = document.createElement("li");
      listItem.classList.add("flex", "items-center", "justify-between", "p-2", "border", "rounded");
      listItem.innerHTML = `
        <span>${taskText} (${taskPriority}) - Due: ${taskDeadline}</span>
        <div>
          <input type="checkbox" class="markDone mr-2">
          <button class="deleteTask bg-red-500 text-white p-1 rounded">Delete</button>
        </div>
      `;
  
      toDoList.appendChild(listItem);
      taskInput.value = "";
      deadlineInput.value = "";
    });
  
    // Move task to Done list or delete task
    toDoList.addEventListener("click", function(e) {
      if (e.target.classList.contains("markDone")) {
        const taskItem = e.target.parentElement.parentElement;
        taskItem.classList.add("line-through", "text-gray-500");
        doneList.appendChild(taskItem);
        e.target.remove(); // Remove the checkbox
      } else if (e.target.classList.contains("deleteTask")) {
        e.target.parentElement.parentElement.remove();
      }
    });
  
    // Clear all tasks
    clearAll.addEventListener("click", function() {
      toDoList.innerHTML = "";
      doneList.innerHTML = "";
    });
  });
  
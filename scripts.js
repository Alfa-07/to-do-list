function addtask(){
    const taskInput =document.getElementById('task');
    const tasklist = document.getElementById('task-list');
    if(taskInput.value.trim()=== '') return;
    
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    tasklist.appendChild(li);

    taskInput.value='';
}
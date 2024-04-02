

const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const tasks = document.querySelector(".tasks");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    // console.log("clicked")
    const userData = input.value;
    // console.log(userData);

    if(!userData){
        alert("please add some task before submitting!");
        return;
    }
     
    const task = document.createElement("div");
    task.classList.add("task");
    task.classList.add("mb-4");

    const content = document.createElement("div");
    content.classList.add("content");

    const task_input = document.createElement("input");
    task_input.classList.add("text");
    task_input.classList.add("form-control");
    task_input.classList.add("mb-2");
    task_input.value = userData;
    task_input.setAttribute("readonly","readonly");
    task_input.type="text";


     content.appendChild(task_input);
     task.appendChild(content);
     tasks.appendChild(task);

     const actions = document.createElement("div");
     actions.classList.add("actions");

     const task_edit = document.createElement("button");
     task_edit.classList.add("edit");
      task_edit.classList.add("btn");
      task_edit.classList.add("btn-warning");
      task_edit.innerHTML= "Edit";

     const task_delete = document.createElement("button");
      task_delete.classList.add("delete");
      task_delete.classList.add("btn");
      task_delete.classList.add("btn-danger");
      task_delete.classList.add("mx-2")
      task_delete.innerHTML = "Delete";

      actions.appendChild(task_edit);
      actions.appendChild(task_delete);
      task.appendChild(actions);


         input.value = "";

      //Edit user data:

      task_edit.addEventListener("click",()=>{
        if(task_edit.innerHTML=="Edit"){
            task_input.removeAttribute("readonly");
            task_edit.innerHTML = "save";
            task_input.focus();
        }
        else{
        task_input.setAttribute("readonly","readonly");
        task_edit.innerHTML = "Edit";
        }
      })

      //Delete user data:

      task_delete.addEventListener("click",()=>{
        tasks.removeChild(task);
      })

});

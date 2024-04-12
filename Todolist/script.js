'use strict'
const todo_list_elem = document.getElementById('todo_list');
todo_list_elem.onclick = check_task;
const btn_add = document.getElementById("btn_add");
btn_add.onclick = add_task;
const VisibleBtn = document.getElementById('hide')
const TextArea = document.getElementById("input_task")

VisibleBtn.onclick = visiblef


function visiblef() {
    TextArea.hidden = !TextArea.hidden
    btn_add.hidden = !btn_add.hidden
}



const TODO_LIST = [];

function add_task(event){
    const text = document.getElementById("input_task").value;
    if (text == ' ') {
       console.log("не")
    } else {
    if (text){
        TODO_LIST.push({title:text, status:false});
        document.getElementById("input_task").value = '';
        render();
    }
}
}
function render(){
    todo_list_elem.innerHTML = ''
    for (let i = 0; i < TODO_LIST.length; i++){
        const item = TODO_LIST[i];
        const todo = `<li class= "list-group-item bg-info-subtle text-dark d-flex justify-content-between">
            <span class="${item.status ? 'text-decoration-line-through': ''}">${item.title}</span>
            <span>
                <span class = "btn btn-success" data-type = "toggle" data-index="${i}">&#x270E;</span>
                <span class = "btn btn-danger" data-type = "delete" data-index="${i}">&#x2613;</span>
            </span>
        </li>`;
        todo_list_elem.insertAdjacentHTML("beforeend", todo);
    }
}


function check_task(event){
    const elem = event.target;
    if (elem.dataset.index){
        const index = Number(elem.dataset.index);
        const type = elem.dataset.type;
        if(type === "toggle"){
            TODO_LIST[index].status = !TODO_LIST[index].status;
        }
        else if(type === "delete"){
            TODO_LIST.splice(index, 1);
        }
        render();
    }
}

render();
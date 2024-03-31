'use strict'

let btn1 = document.getElementById('new_add_btn')

let new_keep = document.getElementById("new_keep"),
    new_keep_btn = document.getElementById("new_keep_btn"),
    Keeps = document.getElementById("keeps")

new_keep.value = localStorage.getItem('input')

new_keep.oninput = save_input

function save_input(event) {
    localStorage.setItem('input', event.target.value)
}

let keeps_array = JSON.parse(localStorage.getItem('keeps')) || []
render_keep()

function render_keep() {
    let i = 0
    for (let value of keeps_array) {
    const keep_template = `
    <div class ="col-3 p-2>"
    <div class="col border p-2">
        <p class = "text-wrap overflow-hidden">${value}</p>
        <button class = "btn btn-danger" id = "remove" data-action = "delete" data index = "i"></button>
    </div>
    </div>
`  
Keeps.insertAdjacentHTML('afterbegin', keep_template)
i++
    }
}



new_keep_btn.onclick = add_keep

btn1.onclick = visiblef

function add_keep(event) {
    if (new_keep.value) {
    keeps_array.push(new_keep.value)
    localStorage.setItem('keeps', JSON.stringify(keeps_array))
    render_keep()
    new_keep.value = ''
    localStorage.removeItem('input')

    }
}

let is_hidden = true

new_keep.hidden = is_hidden
new_keep_btn.hidden = is_hidden

function visiblef() {
    new_keep.hidden = !new_keep.hidden
    new_keep_btn.hidden = !new_keep_btn.hidden
}

keeps.onclick = check_action    

function check_action(event) {
    let HTMLelement = event.target

    if(HTMLelement.dataset.action === 'delete') {
        delete_keep(HTMLelement.dataset.index)
    }
}

function delete_keep(index) {
    keeps_array.splice(index, 1)
    localStorage.setItem('keep', JSON.stringify(keeps_array))
    render_keep()
}
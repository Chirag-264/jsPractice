let todoArray = [];

function renderList() {
    let list = '';

    for (let i = 0; i < todoArray.length; i++) {
        const todoObject = todoArray[i];
        let name;
        let dueDate;
        if(todoObject.name.trim() !== '' && todoObject.dueDate !== '') {
            name = todoObject.name;
            dueDate = todoObject.dueDate;
        }            
        
        
        list += `
            
            <div>${name}</div> 
            <div>${dueDate}</div>
            <button onclick="
                todoArray.splice(${i}, 1);
                renderList();
            ">Delete</button>
            `;
    }

    document.querySelector('.js-tasks').innerHTML = list;
}

function pushTask(event) {
    let task = document.querySelector('input').value;
    const dueDate = document.querySelector('.js-date').value;

    todoArray.push({
        name: task,
        dueDate
    });

    document.querySelector('input').value = '';
    document.querySelector('.js-date').value = '';

    renderList();
}
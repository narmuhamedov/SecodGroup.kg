// получить элементы
const todoInput = document.getElementById('todoInput');
const addTodoBtm = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// функция для добавления новой задачи
function addTodo(){
    const taskText = todoInput.value.trim();
    if (taskText === ''){
        alert('Введите задачу');
        return;
}
    //Создаем элементы
    const li = document.createElement('button');
    li.classList.add('todo-item');
    li.textContent = taskText;

    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'готово';
    doneBtn.onclick = () => li.classList.toggle('done');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'удалить';
    deleteBtn.onclick = () => li.remove();

    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    //очищаем ввод
    todoInput.value = '';
}
//обработчик события на кнопку
addTodoBtm.addEventListener('click', addTodo);

//Добавление задачи по нажатию кнопки ENTER
todoInput.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        addTodo();
    }
})
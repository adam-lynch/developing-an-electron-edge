function displayTodo (id, todo) {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = toggleTodoDone.bind(this, id); // not yet implemented
    checkbox.checked = (todo.done ? true : false);

    var textSpan = document.createElement('span');
    textSpan.textContent = todo.text;

    var li = document.createElement('li');
    li.appendChild(checkbox);
    li.appendChild(textSpan);
    listOfTodos.appendChild(li);
}
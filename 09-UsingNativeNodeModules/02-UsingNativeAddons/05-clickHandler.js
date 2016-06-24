addTodoButton.addEventListener('click', () => {
    var text = textInput.value;
    if (!text) return;
    var id = uuid();
    var todo = {
        text: text,
        done: false
    };
    db.put(id, todo, (err) => {
        if (err) console.error(err);
        textInput.value = ''; // reset input field
        displayTodo(id, todo); // not yet implemented
    });
});
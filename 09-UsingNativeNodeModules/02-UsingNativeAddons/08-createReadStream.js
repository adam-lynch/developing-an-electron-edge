db.createReadStream().on('data', (data) => {
    displayTodo(data.key, data.value);
});
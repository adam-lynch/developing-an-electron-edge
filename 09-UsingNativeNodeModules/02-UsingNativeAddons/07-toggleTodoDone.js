function toggleTodoDone (id) {
    db.get(id, (err, todo) => {
        if (err) console.error(err);
        todo.done = !todo.done;
        db.put(id, todo, (err) => {
            if (err) console.error(err);
        });
    });
}
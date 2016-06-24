const levelup = require('levelup');
const uuid = require('uuid');
const db = levelup('./db', { valueEncoding: 'json' });
const listOfTodos = document.getElementById('list-of-todos');
const textInput = document.getElementById('text-input');
const addTodoButton = document.getElementById('add-todo');
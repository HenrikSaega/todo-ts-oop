"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const todos = [];
const createTodo = (req, res, next) => {
    try {
        const task = req.body.task;
        const newTodo = new todo_1.Todo(Math.random().toString(), task);
        todos.push(newTodo);
        res.status(201).json({
            message: 'Loodi uus todo',
            createdTask: newTodo
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    console.log("GetTodo");
    try {
        res.status(201).json({
            tasks: todos
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    console.log("UpdateTodo");
    try {
        const todoId = req.params.id;
        const updatedTask = req.body.task;
        const todoIndex = todos.findIndex(todo => todo.id === todoId);
        if (todoIndex < 0) {
            throw new Error("Ei leidnud vastava id-ga todo");
        }
        todos[todoIndex] = new todo_1.Todo(todos[todoIndex].id, updatedTask);
        res.status(201).json({
            message: "Todo uuendatud",
            updatedTask: todos[todoIndex]
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    console.log("UpdateTodo");
    try {
        const todoId = req.params.id;
        const todoIndex = todos.findIndex(todo => todo.id === todoId);
        if (todoIndex < 0) {
            throw new Error("Ei leidnud vastava id-ga todo");
        }
        todos.splice(todoIndex);
        res.status(201).json({
            message: "Todo edukalt kustutatud",
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.deleteTodo = deleteTodo;

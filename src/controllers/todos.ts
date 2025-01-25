import { Request, Response, NextFunction } from "express";
import { Todo } from "../models/todo";



class TodoController {
    todos: Todo[] = []

    constructor() {
        this.createTodo = this.createTodo.bind(this)
        this.getTodos = this.getTodos.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
    }
    
    createTodo = (req: Request, res: Response, next: NextFunction) => {
        try{
            const task = (req.body as {task: string}).task
            const newTodo = new Todo(Math.random().toString(), task)
            this.todos.push(newTodo)
            res.status(201).json({
                message: 'Loodi uus todo',
                createdTask: newTodo
            })
        } catch(error){
            console.log(error)
        }
    }
    getTodos = (req: Request, res: Response, next: NextFunction) => {
        console.log("GetTodo")
        try{
            res.status(201).json({
                tasks: this.todos
            })
        } catch(error){
            console.log(error)
        }
    }
    updateTodo = (req: Request, res: Response, next: NextFunction) => {
        console.log("UpdateTodo")
        try{
            const todoId = req.params.id
            const updatedTask = (req.body as {task: string}).task
            const todoIndex = this.todos.findIndex(todo => todo.id === todoId)
    
            if(todoIndex < 0)
            {
                throw new Error("Ei leidnud vastava id-ga todo")
            }
    
            this.todos[todoIndex] = new Todo(this.todos[todoIndex].id, updatedTask)
    
            res.status(201).json({
                message: "Todo uuendatud",
                updatedTask: this.todos[todoIndex]
            })
        }
        catch(error){
            console.log(error)
        }
    
        
    }
    deleteTodo = (req: Request, res: Response, next: NextFunction) => {
        console.log("UpdateTodo")
        try{
            const todoId = req.params.id
            const todoIndex = this.todos.findIndex(todo => todo.id === todoId)
    
            if(todoIndex < 0)
            {
                throw new Error("Ei leidnud vastava id-ga todo")
            }
            this.todos.splice(todoIndex, 1)
    
            res.status(201).json({
                message: "Todo edukalt kustutatud",
            })
        }
        catch(error){
            console.log(error)
        }
    
        
    }
}
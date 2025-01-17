import { Request, Response, NextFunction } from "express";
import { Todo } from "../models/todo";
import { todo } from "node:test";

const todos: Todo[] = []

export const createTodo = (req: Request, res: Response, next: NextFunction) => {
    try{
        const task = (req.body as {task: string}).task
        const newTodo = new Todo(Math.random().toString(), task)
        todos.push(newTodo)
        res.status(201).json({
            message: 'Loodi uus todo',
            createdTask: newTodo
        })
    } catch(error){
        console.log(error)
    }
}

export const getTodos = (req: Request, res: Response, next: NextFunction) => {
    console.log("GetTodo")
    try{
        res.status(201).json({
            tasks: todos
        })
    } catch(error){
        console.log(error)
    }
}

export const updateTodo = (req: Request, res: Response, next: NextFunction) => {
    console.log("UpdateTodo")
    try{
        const todoId = req.params.id
        const updatedTask = (req.body as {task: string}).task
        const todoIndex = todos.findIndex(todo => todo.id === todoId)

        if(todoIndex < 0)
        {
            throw new Error("Ei leidnud vastava id-ga todo")
        }

        todos[todoIndex] = new Todo(todos[todoIndex].id, updatedTask)

        res.status(201).json({
            message: "Todo uuendatud",
            updatedTask: todos[todoIndex]
        })
    }
    catch(error){
        console.log(error)
    }

    
}

export const deleteTodo = (req: Request, res: Response, next: NextFunction) => {
    console.log("UpdateTodo")
    try{
        const todoId = req.params.id
        const todoIndex = todos.findIndex(todo => todo.id === todoId)

        if(todoIndex < 0)
        {
            throw new Error("Ei leidnud vastava id-ga todo")
        }

        todos.splice(todoIndex)

        res.status(201).json({
            message: "Todo edukalt kustutatud",
        })
    }
    catch(error){
        console.log(error)
    }

    
}
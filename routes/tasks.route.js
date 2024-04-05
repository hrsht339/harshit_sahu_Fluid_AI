const express = require("express")
const { taskModel } = require("../models/task.model")

const taskRouter = express.Router()

taskRouter.get("/gettasks",async(req,res)=>{
    try{
        const tasks = await taskModel.find()
        res.send({
            "msg":"all tasks below",
            tasks
        })
    }
    catch(err){
        console.log(err)
    }
})

taskRouter.post("/addtask",async(req,res)=>{
    const { title, description, dueDate, priority, status} = req.body
    try{
        const task = new taskModel({
            title, description, dueDate, priority, status
        })
        task.save()
        res.send({
            "msg":"task added",
            task
        })
    }
    catch(err){
        console.log(err)
    }
})

taskRouter.patch("/task/:id",async(req,res)=>{
    const body = req.body
    const {id} = req.params
    try{
        const task = await taskModel.findByIdAndUpdate(id,body)
    
        res.send({
            "msg":"task updated",
            body
        })
    }
    catch(err){
        console.log(err)
    }
})

taskRouter.delete("/task/:id",async(req,res)=>{
    const body = req.body
    const {id} = req.params
    try{
        const task = await taskModel.findByIdAndDelete(id)
    
        res.send({
            "msg":"task deleted",
            task
        })
    }
    catch(err){
        console.log(err)
    }
})


taskRouter.get("/task/:id",async(req,res)=>{
    const {id} = req.params
    try{
        const tasks = await taskModel.findById(id)
        res.send({
            "msg":"task down below",
            tasks
        })
    }
    catch(err){
        console.log(err)
    }
})

module.exports= {
    taskRouter
}
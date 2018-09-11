const router = require('express').Router()
const repository = require('./repository')
const {Status}= require('./constants')
const { isObjectEmpty }= require('./utils');
const taskqueue = require('./taskqueue');



router.route("/task")
.post((req,res)=>{
    const task={
        status:Status.READY,
        progress:"0",
        notes:req.body.notes,
        priority:req.body.priority,
        description:req.body.description,
        name:req.body.name,
        estimate:req.body.estimate,
        recurring:req.body.recurring||false,
    }
    repository.createTask(task).then(result=>{
        res.send("Created")
        taskqueue.StartTask(result)
    }).catch(err=>{
        console.log(err)
    })
})
.get((req,res)=>{
   let  call
    if(isObjectEmpty(req.params)){
        call= repository.fetchAllTask()
    }
    else{
        call=repository.fetchTask(req.params)
    }
    call.then(taskList=>{
        res.json(taskList)
    }).catch(err=>{
        res.status(500).send(err)
    })
})

module.exports=router
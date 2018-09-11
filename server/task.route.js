const router = require('express').Router()
const repository = require('./repository')
const {Status,StatusOrder}= require('./constants')
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
        taskList=taskList.sort(sortByStatus)
        res.json(taskList)
    }).catch(err=>{
        res.status(500).send(err)
    })
})

const sortByStatus=(t1,t2)=>{
    const order1=StatusOrder[t1.status]
    const order2=StatusOrder[t2.status]
    return order1>order2
}


module.exports=router
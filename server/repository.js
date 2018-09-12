const {Task,Template,TimeInStatus}= require('./database')
const utils = require('./utils')


module.exports={
    fetchTask(params){
        return Task.findAll({where:params})
    },
    fetchAllTask(){
        return Task.findAll({order:["rank"]})
    },
    fetchTaskById(id){
        return Task.findById(id)
    },
    createTask(task){
        task.rank=utils.calculateRank(task.priority,task.estimate)
        return Task.create(task)
    },
    createTemplate(template){
        return Template.create(template)
    },
    fetchTemplates(){
        return Template.findAll()
    },
    createTimeInStatus(data){
       return TimeInStatus.create(data)
    },
    updateTask(task){
        return Task.update(data)
    },
    deleteTask(id){
        return this.fetchTaskById(id).then(task=>{
            if(task)
            return task.destroy()
        })
    }


}
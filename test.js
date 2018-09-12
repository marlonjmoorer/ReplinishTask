const test = require('tape')
const repository = require('./server/repository')
const database = require('./server/database')


const run=async() => {
    await database.sync()
    
    test.only("can create task from template",async (t)=> {
        let temp= await repository.createTemplate({
            description:"testTemp",
            priority:2,
            name:"testTemp",
            estimate:400
        })
        t.notEqual(temp,null)
        let template= await repository.fetchTemplateById(temp.id)
        t.notEqual(temp,null)
        let task= await repository.createTask({
            priority:template.priority,
            estimate:template.estimate,
            name:template.name,
            description:template.description
        })
        t.notEqual(task,null)
        t.equal(task.name,temp.name)
        t.equal(task.estimate,temp.estimate)
        t.equal(task.description,temp.description)
        t.end()
    })

    test.only("can add template",async(t)=>{
        try {
            let temp= await repository.createTemplate({
                description:"test",
                priority:1,
                name:"test",
                estimate:400
            })
            t.notEqual(temp,null)
            let newTemp= await repository.fetchTemplateById(temp.id)
            t.equals(temp.name,newTemp.name)
            t.equals(temp.description,newTemp.description)
            
        } catch (e) {
        
        }
        t.end()
    })

    test.only("can add task", async(t) => {
        try {
            let task = await repository.createTask({name: "test", estimate: 500, priority: 1})
            t.not(task, null)
            let newTask= await repository.fetchTaskById(task.id) 
            t.equal(task.name,newTask.name)
            t.equals(task.estimate,newTask.estimate)
            t.end()
        } catch (e) {
            t.fail(e.message)
            t.end()
        }
        finally{
            repository.deleteTask(task.id)
        }

    })

    test("can delete task", async(t) => {
        try {
            let task = await repository.createTask({name: "test", estimate: 6000, priority: 3})
            t.not(task, null)
            await repository.deleteTask(task.id)
            let result = await repository.fetchTaskById(task.id)
            t.equals(result, null)
        } catch (ex) {
            console.log(ex)
            t.fail(ex.message)
        }
        t.end()
    })
}
run()

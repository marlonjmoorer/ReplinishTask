const test = require('tape')
const repository = require('./server/repository')
const database = require('./server/database')


const run=async() => {
    await database.sync()
    

    test.only("can add task", async(t) => {
        try {
            let task = await repository.createTask({name: "test", estimate: 500, priority: 1})
            t.not(task, null)
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

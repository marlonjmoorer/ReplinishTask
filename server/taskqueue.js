const {sudoPromise,wait} = require('./utils')
const repository = require('./repository')
const {Status}= require('./constants')

module.exports.StartTask=async(task)=>{
    let time= task.estimate
    let startTime= time*.10
    let runTime= time *.80
    let stopTime=time*.10

   
   
    task.status=Status.STARTED
    await task.save()
    console.log("Starting Task"+ task.id)
    await wait(startTime)
    //
    task.status=Status.RUNNING
    await task.save()
    console.log("Running Task"+ task.id)
    await repository.createTimeInStatus({
        status:Status.RUNNING,
        time:runTime
    }) 
    await wait(runTime)
    //
    task.status=Status.STOPING
    await task.save()
    console.log("Stoping Task"+ task.id)
    await repository.createTimeInStatus({
        status:Status.STOPING,
        time:stopTime
    }) 
    await wait(stopTime)
    task.status=Status.FINISHED
    await task.save()
    console.log("Finished Task"+ task.id)

}


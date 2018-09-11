const Status={
    PENDING:"PENDING",
    STARTED:"STARTED",
    RUNNING:"RUNNING",
    STOPING:"STOPING",
    FINISHED:"FINISHED"
}
const StatusOrder={
   [Status.PENDING]:1,
   [Status.STARTED]:2,
   [Status.RUNNING]:3,
   [Status.STOPING]:4,
   [Status.FINISHED]:5
}
module.exports={
   Status,
   StatusOrder
}

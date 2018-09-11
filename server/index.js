const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const task = require('./task.route')
const template = require('./template.route')

const app= express()
const port=5000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/api",[task,template])

app.listen(port,()=>console.log("App Started"))
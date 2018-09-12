const router = require('express').Router()
const repository = require('./repository')
const {Status}= require('./constants')


router.route("/template")
.get((req,res)=>{
    repository.fetchTemplates().then(templates=>{
        res.json(templates)
    }).catch(err=>{
        res.status(500).send(err)
    })
})
.post((req,res)=>{
    const template={
        description:req.body.description,
        priority:req.body.priority,
        name:req.body.name,
        estimate:req.body.estimate,
        recurring:req.body.recurring||false,
    }
    repository.createTemplate(template).then(result=>{
        res.send("Created")
    }).catch(err=>{
        console.log(err)
    })
})
module.exports=router

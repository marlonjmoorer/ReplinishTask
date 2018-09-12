import React from 'react'
import {Card,CardHeader,CardBody,CardFooter,Button} from "reactstrap"
export default ({template,create}) => {
  return (
    <Card>
    <CardHeader> {template.name}</CardHeader>
    <CardBody>
      <ul>
        <li>Priority: {template.priority} </li>
        <li>Estimate: {template.estimate} </li>
        <li>Description: {template.description} </li>
        <li>Recurring :{template.recurring.toString()} </li>
      </ul>
    </CardBody>
    <CardFooter>
    <Button color="primary" onClick={e=>create(makeTaskFromTemplate(template))}  >Create Task </Button>
    </CardFooter>
    </Card>
  )
}

const makeTaskFromTemplate =({priority,estimate,name,description,recurring})=>({
  priority,
  estimate,
  name,
  description,
  recurring
})
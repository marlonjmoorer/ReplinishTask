import React from 'react'
import ModalWrapper from "./ModalWrapper"
import {Card,CardHeader,CardBody} from "reactstrap"
export default ModalWrapper(({task}) => {
  return (
      <ul>
        <li>Priority: {task.priority} </li>
        <li>Estimate: {task.estimate} </li>
        <li>Status: {task.status} </li>
        <li>Description: {task.description} </li>
      </ul>
  )
})

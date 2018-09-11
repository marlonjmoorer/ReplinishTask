import React, { Component } from 'react'
import { ListGroup,ListGroupItem,Card,CardHeader,
  CardBody,CardFooter,Badge} from 'reactstrap';

import Api from "./Api"
import TaskDetail from './TaskDetail'

export default class PendingTaskList extends Component {

    constructor(props){
      super(props)
      this.state={
        isOpen:false,
        selectedTask:{}
      }
    }

    openTask=(task)=>{
      this.setState(({isOpen})=>({isOpen:!isOpen,selectedTask:task||{}}))
    }
    render() {
      let {taskList}= this.props
      return (
        <Card>
        <CardHeader>Pending Task</CardHeader>
        <CardBody>
        <ListGroup>
          {taskList.map(task=>
          <ListGroupItem tag="a" href="#" color="primary" onClick={e=>this.openTask(task)} >
            {task.name} &nbsp;  &nbsp;  <Badge>{task.status}</Badge>
          </ListGroupItem>)}
        </ListGroup>
        </CardBody>
        <TaskDetail  title="Task" isOpen={this.state.isOpen} toggle={this.openTask} task={this.state.selectedTask} />
      </Card>)
  }
}

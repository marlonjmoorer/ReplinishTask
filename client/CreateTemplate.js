import React, { Component } from 'react'
import {Form,FormGroup,Input,Label,Button} from "reactstrap"
import ModalWrapper from "./ModalWrapper"
class CreateTemplate extends Component {
    state={
      priority:1,
      estimate:60000,
      recurring:false
    }
    onChange=({target})=>{
        this.setState({[target.name]:target.value})
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const{name,priority,description,estimate,recurring}=this.state
        const template={
            name,
            priority,
            description,
            estimate,
            recurring
        }
        this.props.create(template)
    }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" onChange={this.onChange} />
        </FormGroup>
        <FormGroup>
          <Label for="priority">Priority</Label>
          <Input type="select" name="priority" onChange={this.onChange} id="priority">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label >Time Estimate</Label>
          <Input type="select" name="estimate" onChange={this.onChange} >
            <option value="60000" >1:00</option>
            <option value="120000" >2:00</option>
            <option value="300000" >5:00</option>
            <option value="600000" >10:00</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label >Description</Label>
          <Input type="textarea" onChange={this.onChange} name="description"  />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input onChange={e=>{
                e.target.value=e.target.checked
                this.onChange(e)
              }} name="recurring" type="checkbox" />{' '}
            Recurring
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }
}
export default ModalWrapper(CreateTemplate)
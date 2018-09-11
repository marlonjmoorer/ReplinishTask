import React, { Component } from 'react'
import {Card,CardBody,CardHeader,CardFooter,Col,Row} from "reactstrap"
import Template from './Template';

export default class TemplatesList extends Component {
  render() {
    return (
        <Card>
        <CardHeader> Task Templates</CardHeader>
        <CardBody>
          <Row>
          {this.props.templates.map(template=> 
              <Col xs={4}>
                 <Template create={this.props.create} template={template}/>
              </Col>
          )}
          </Row>
        </CardBody>
        <CardFooter>
         
        </CardFooter>
        </Card>
    )
  }
}

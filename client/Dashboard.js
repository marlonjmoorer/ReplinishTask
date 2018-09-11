import React, {Component} from 'react'
import NavBar from './NavBar'
import {
    TabContent,
    TabPane,
    Row,
    Col,
    Container,
    Button
} from "reactstrap"
import PendingTaskList from './PendingTaskList'
import CreateTask from './CreateTask';
import Api from './Api';
import TemplateList from './TemplateList';
import CreateTemplate from './CreateTemplate';


export default class Dashboard extends Component {

    state = {
        activeTab: "1",
        modals:{
            showTask:false,
            showTemplate:false
        },
        taskList:[],
        templateList:[]
    }

    componentDidMount() {
        this.fetchTask()
        this.fetchTemplates()
    }
    setTab = (id) => {
        this.setState({activeTab: id})
    }
    createTask=(task)=>{
       Api.post("/api/task",task).then(res=>{
           if(res.data){
               if(this.state.modals.showTask){
                  this.toggle("showTask") 
               }
               this.fetchTask()
           }
       }).catch(err=>{
           console.log(err)
       })

    }
    fetchTask=()=>{
        Api.get("api/task",{params:{}}).then(res=>{
            if(res.data){
              this.setState({taskList:res.data})
            }
          })
    }

    createTemplate=(template)=>{
        Api.post("api/template",template).then(res=>{
            if(res.data){
                this.toggle("showTemplate")
                this.fetchTemplates()
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    fetchTemplates=()=>{
        Api.get("/api/template").then(res=>{
            this.setState({templateList:res.data})
        })
    }
    toggle=(id)=>{
        this.setState(({modals})=>{
            modals[id]=!modals[id]
            return ({modals})
        })
    }

    render() {
       
        return (
            <Container fluid>
                <Row>
                    <Col xs={4}>
                        <NavBar setTab={this.setTab} activeTab={this.state.activeTab}/>
                    </Col>
                    <Col>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="12">
                                        <PendingTaskList taskList={this.state.taskList}/>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col sm="12">
                                        <TemplateList create={this.createTask} templates={this.state.templateList}/>
                                        <Button color="primary" onClick={e=>this.toggle("showTemplate")} >Create Template</Button>
                                        <CreateTemplate  create={this.createTemplate} title={"Create Template"} isOpen={this.state.modals.showTemplate} toggle={e=>this.toggle("showTemplate")} />
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Button color="primary" onClick={e=>this.toggle("showTask")} >Create Task</Button>
                    </Col>
                </Row>
                <CreateTask create={this.createTask} title={"Create Task"} isOpen={this.state.modals.showTask} toggle={e=>this.toggle("showTask")} />
            </Container>
        )
    }
}

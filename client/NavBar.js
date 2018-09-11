import React, { Component } from 'react'
import {Nav,NavItem,NavLink} from "reactstrap"
export default class NavBar extends Component {
    constructor(props){
        super(props)
        this.state={
            tabs:[
            {
                name:"Pending Task",id:"1"
            },
            {
                name:"Templates",id:"2"
            },
            {
                name:"Tracked Task",id:"3"
            }]
        }
    }
  
    select(id){
        this.props.setTab(id)
    }
    render() {
    return (
      <div>
        <Nav pills tabs vertical>
            {this.state.tabs.map(tab=>
            
            <NavLink
              active={ this.props.activeTab ==tab.id }
              onClick={() => { this.select(tab.id) }}>
              {tab.name}
             </NavLink>
            )}
           
        </Nav>
       
      </div>
    )
  }
}

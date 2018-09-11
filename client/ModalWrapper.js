import React from 'react'
import {Modal,ModalHeader,ModalBody} from "reactstrap"

export default (Component) => (props)=>{
    return (
            <div>
              <Modal isOpen={props.isOpen} toggle={props.toggle} >
                  <ModalHeader>{props.title}</ModalHeader>
                  <ModalBody>
                    <Component {...props}/>
                  </ModalBody>
                </Modal>
            </div>
          )
    }



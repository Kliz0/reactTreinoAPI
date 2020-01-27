import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
import { render } from "enzyme";
import api from "../../services/api";


class ModalAddServico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  postServicoHandler = props => {
      return api.post('/server.json')
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="Modal" style={{ float: "right"}}>
        <Button style={{margin:"47px 430px 0px 0px"}} color="primary" onClick={this.toggle}>
          Criar serviço
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Criar Serviço</ModalHeader>
          <ModalBody>
            <p style={{textAlign: "center", marginTop: 20}}>
              Nome do serviço: <input type="Name" />
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.postServiçoHandler}>
              Adicionar Serviço
            </Button>{" "}
            <Button color="danger" onClick={this.toggle}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalAddServico;
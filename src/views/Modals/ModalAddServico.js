import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from 'react-redux';
import servico from '../../store/modules/servico/reducer';

class ModalAddServico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  addServicoHandler = nome => {
    const { dispatch } = this.props;
    // Início addAplicacao. Tem que terminar.
    dispatch({
      type: "@aplicacoes/ADD_REQUEST",
      nome
    });
  };
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="Modal" style={{ float: "right" }}>
        <Button
          style={{ margin: "47px 430px 0px 0px" }}
          color="primary"
          onClick={this.toggle}
        >
          Criar serviço
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Criar Serviço</ModalHeader>
          <ModalBody>
            <p style={{ textAlign: "center", marginTop: 20 }}>
              Nome do serviço: <input type="text" />
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.addServicoHandler(servico)}>
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

const mapStateToProps = state => ({
  servico: state.servico,
  servicos: state.servicos
});

export default connect(mapStateToProps)(ModalAddServico);

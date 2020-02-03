import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import aplicacoes from "../../store/modules/aplicacoes/reducer";
/* import { addAplicacaoRequest, addAplicacaoSucess } from "../../store/modules/aplicacoes/actions"; */
import { bindActionCreators } from 'redux'
import * as aplicacaoActions from '../../store/modules/aplicacoes/actions';

class ModalAddAplicacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nomeAplicacao: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  mudarNomeHandler = evt => {
    this.setState({
      nomeAplicacao: evt.target.value
    });
  };

  addAplicacaoHandler = nomeAplicacao => {
    this.props.addAplicacaoRequest(nomeAplicacao);
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
          style={{ margin: "47px 536px 0px 0px" }}
          color="primary"
          onClick={this.toggle}
        >
          Criar aplicação
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Criar Aplicação</ModalHeader>
          <ModalBody>
            <p>
              Nome da aplicação:{" "}
              <input
                type="text"
                value={this.state.nomeAplicacao}
                onChange={this.mudarNomeHandler}
              />
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              color="primary"
              onClick={() => this.addAplicacaoHandler(this.state.nomeAplicacao)}
            >
              Adicionar aplicação
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

/* const mapDispatchToProps = dispatch => ({
  mudarNomeHandler: aplicacaoNome =>
    dispatch({ type: "@aplicacoes/ADD_REQUEST", nomeAplicacao: aplicacaoNome })
}); */


const mapDispatchToProps = dispatch =>
  bindActionCreators(aplicacaoActions, dispatch);

export default connect(undefined, mapDispatchToProps)(ModalAddAplicacao);

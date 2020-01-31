import React, { Component } from "react";

import { Table, Button } from "reactstrap";
import api from "../../services/api";
import ModalAddServico from "../Modals/ModalAddServico";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Aplicacao extends Component {
  state = {
    servicos: []
  };

  async componentDidMount() {
    const {
      match: { params }
    } = this.props;

    api.get("http://localhost:3333/aplicacoes").then(response => {
      this.setState({ aplicacoes: response.data });
    });

    api
      .get(`http://localhost:3333/aplicacao/${params.idAplicacao}`)
      .then(({ data: aplicacao }) => {
        console.log("aplicacao", aplicacao);

        this.setState({ aplicacao });
      });


    api
      .get(`http://localhost:3333/aplicacao/${params.idAplicacao}/servicos`)
      .then(response => {
        this.setState({ servicos: response.data });
        console.log("servico", this.servico);
      });

     
  }

  servico = this.props.servico;

  render() {
    const { servicos } = this.state;

    return (
      <>
        <h1 style={{ textAlign: "center" }}>
          {this.state.aplicacao ? this.state.aplicacao.Nome : undefined}{" "}
        </h1>

        <ModalAddServico />

        <div
          style={{
            width: "100%",
            alignItems: "center",
            boxAlign: "center",
            margin: "90px 400px 10px 400px"
          }}
        >
          <Table
            striped
            hover
            bordered
            style={{
              width: "60%",
              margin: "20px, 300px, 20px, 500px",
              boxSizing: "border-box",
              textAlign: "center"
            }}
          >
            <thead style={{ fontSize: 18, fontWeight: "bold" }}>
              <tr>
                <th>Serviço</th>
                <th>Lista de Execução</th>
              </tr>
            </thead>
            <tbody>
              {servicos.map(servico => (
                <tr key={servico.id}>
                  <td>
                    <Link
                      to={`http://localhost:3333/aplicacoes/${this.state.aplicacao.id}/servicos/${this.servico}`}
                    >
                      {servico.Nome}
                    </Link>
                  </td>
                  <td>{servico.ListaDeExecucao}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
    aplicacao: state.aplicacao,
    aplicacoes: state.aplicacoes,
    servico: state.servico
  });

export default connect(mapStateToProps)(Aplicacao);

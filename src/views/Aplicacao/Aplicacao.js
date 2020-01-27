import React, { Component, lazy, Suspense, useState } from "react";

import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";
import { Table, Button } from "reactstrap";
import api from "../../services/api";
import ModalAddServico from "../Modals/ModalAddServico";

class Aplicacao extends Component {
  state = {
    servicos: []
  };

  async componentDidMount() {
    api
      .get(`http://localhost:3333/aplicacao/{aplicacao.id}/{servico.id}`)
      .then(response => {
        this.setState({ servicos: response.data });
      });

    const {
      match: { params }
    } = this.props;

    api
      .get(`http://localhost:3333/aplicacao/${params.idAplicacao}`)
      .then(({ data: aplicacao }) => {
        console.log("aplicacao", aplicacao);

        this.setState({ aplicacao });
      });
  }

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
                <th>Servicos</th>
                <th>Data Início</th>
                <th>Data Fim</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {servicos.map(servico => (
                <tr key={servico.id}>
                  <td>
                    {" "}
                    <a
                      href={`http://localhost:3333/aplicacoes/${this.state.aplicacao.id}/servicos/${servico.id}`}
                    >
                      {servico.Nome}
                    </a>
                  </td>
                  <td>{servico.dataInicio}</td>
                  <td>{servico.dataFim}</td>
                  <td>{servico.Status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default Aplicacao;

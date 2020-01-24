import React, { Component, lazy, Suspense, useState } from "react";

import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";
import {
  Table,
  Button
} from "reactstrap";

class Aplicacao extends Component {
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}> Nome Aplicação Específica</h1>

        <h2>Botão de adicionar Servico com modal dele!</h2>
        <h2>Lista de Servicos com link deles!</h2>
        <Button
          color="primary"
          style={{
            float: "right",
            marginRight: 430,
            marginTop: 193,
            fontSize: 18
          }}
        >
          Adicionar Servico
        </Button>

        <div
          style={{
            width: "100%",
            alignItems: "center",
            boxAlign: "center",
            margin: "90px 400px 10px 400px"
          }}
        >
          <Table
            hover
            bordered
            style={{
              width: "60%",
              margin: "20px, 300px, 20px, 500px",
              boxSizing: "border-box"
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
              <tr>
                <td>Nome Servico 1 Link para ele</td>
                <td>Data Início 1</td>
                <td>Data Fim 1</td>
                <td>Status 1</td>
              </tr>
              <tr>
                <td>Nome Servico 2</td>
                <td>Data Início 2</td>
                <td>Data Fim 2</td>
                <td>Status 2</td>
              </tr>
              <tr>
                <td>Nome Servico 3</td>
                <td>Data Início 3</td>
                <td>Data Fim 3</td>
                <td>Status 3</td>
              </tr>
              <tr>
                <td>Nome Servico 1</td>
                <td>Data Início 1</td>
                <td>Data Fim 1</td>
                <td>Status 1</td>
              </tr>
              <tr>
                <td>Nome Servico 2</td>
                <td>Data Início 2</td>
                <td>Data Fim 2</td>
                <td>Status 2</td>
              </tr>
              <tr>
                <td>Nome Servico 3</td>
                <td>Data Início 3</td>
                <td>Data Fim 3</td>
                <td>Status 3</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}

export default Aplicacao;

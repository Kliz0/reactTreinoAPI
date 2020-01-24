import React, { Component, lazy, Suspense, useState } from "react";

import { InputGroup, InputGroupText, InputGroupAddon, Input } from "reactstrap";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class Servico extends Component {
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}> Nome Servico Específico</h1>

        <h2>Botão de adicionar execução com modal dele!</h2>
        <h2>
          Botão de finalizar execução com modal dele! Você gostaria de finalizar
          esta execução
        </h2>
        <h2>Lista de Execuções com modal delas!</h2>
        <Button
          color="primary"
          style={{
            float: "right",
            marginRight: 430,
            marginTop: 193,
            fontSize: 18
          }}
        >
          Adicionar Execução
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
                <th>Execuções</th>
                <th>Data Início</th>
                <th>Data Fim</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nome Execução 1 Link para modal</td>
                <td>Data Início 1</td>
                <td>Data Fim 1</td>
                <td>Status 1</td>
              </tr>
              <tr>
                <td>Nome Execução 2</td>
                <td>Data Início 2</td>
                <td>Data Fim 2</td>
                <td>Status 2</td>
              </tr>
              <tr>
                <td>Nome Execução 3</td>
                <td>Data Início 3</td>
                <td>Data Fim 3</td>
                <td>Status 3</td>
              </tr>
              <tr>
                <td>Nome Execução 1</td>
                <td>Data Início 1</td>
                <td>Data Fim 1</td>
                <td>Status 1</td>
              </tr>
              <tr>
                <td>Nome Execução 2</td>
                <td>Data Início 2</td>
                <td>Data Fim 2</td>
                <td>Status 2</td>
              </tr>
              <tr>
                <td>Nome Execução 3</td>
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

export default Servico;

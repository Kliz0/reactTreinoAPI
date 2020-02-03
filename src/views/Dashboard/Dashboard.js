import React, { Component, lazy, Suspense } from "react";
import {
  Badge,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table
} from "reactstrap";

import api from "../../services/api";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";
import Aplicacao from "../Aplicacao/Aplicacao";
import ModalAddAplicacao from "../Modals/ModalAddAplicacao";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addAplicacaoRequest } from "../../store/modules/aplicacoes/actions";

const Widget03 = lazy(() => import("../Widgets/Widget03"));
const brandPrimary = getStyle("--primary");
const brandSuccess = getStyle("--success");
const brandInfo = getStyle("--info");
const brandWarning = getStyle("--warning");
const brandDanger = getStyle("--danger");

// Card Chart 1

class Dashboard extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  state = {
    aplicacoes: []
  };

  async componentDidMount() {
    api.get("aplicacoes").then(response => {
      this.setState({ aplicacoes: response.data });
    });
  }

  aplicacao = this.props.aplicacao;

  render() {
    const { aplicacoes } = this.state;
    return (
      <>
        <Breadcrumb>
          <BreadcrumbItem active>Monitor</BreadcrumbItem>
        </Breadcrumb>

        <h1 style={{ textAlign: "center" }}> Monitor</h1>

        <h2 style={{ textAlign: "center" }}>Lista de aplicações</h2>

        <ModalAddAplicacao color="primary" />

        <div
          style={{
            width: "100%",
            alignItems: "center",
            boxAlign: "center",
            marginTop: 90
          }}
        >
          <Table
            striped
            hover
            bordered
            style={{
              width: 1000,
              textAlign: "left",
              paddingLeft: 50,
              boxAlign: "center",
              margin: "0px 540px 0px 540px"
            }}
          >
            <thead style={{ fontSize: 18, fontWeight: "bold" }}>
              <tr>
                <th>Nome Aplicação</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: 18 }}>
              {aplicacoes.map(aplicacao => (
                <tr key={aplicacao.id}>
                  <Link to={`/aplicacao/${aplicacao.id}`}>
                    {aplicacao.Nome}
                  </Link>
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
  aplicacoes: state.aplicacoes
});
export default connect(mapStateToProps)(Dashboard);

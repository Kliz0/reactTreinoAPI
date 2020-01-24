import React, { Component, lazy, Suspense } from 'react';
import {
  Badge,
  Button,
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
  Table,
} from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import BrandButtons from '../Buttons/BrandButtons/BrandButtons';

const Widget03 = lazy(() => import('../Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Card Chart 1


class Dashboard extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
        <>
        <Breadcrumb>
        <BreadcrumbItem active>Monitor</BreadcrumbItem>
      </Breadcrumb>

        <h1 style={{ textAlign: "center"}}> Monitor</h1>
                 
        <h2 style={{textAlign: "center"}}>Lista de aplicações</h2>

        <div style={{ width: "100%", alignItems: "center", boxAlign: "center", 
        marginTop: 50}}>
          <Button color="primary" style={{ float: "right", marginRight: 535, fontSize: 18}}>
            Adicionar Aplicação
          </Button>
        </div>
        <div style={{ width: "100%", alignItems: "center", boxAlign: "center", 
        marginTop: 90}}>
        <Table hover bordered style={{
           
           width: 1000, textAlign: "left", paddingLeft: 50,
          boxAlign: "center", margin: "0px 540px 0px 540px", 
      }}>
      <thead style={{fontSize: 18, fontWeight: "bold"}}>
        <tr>
          <th>Nome Aplicação</th>
          {/*style={{float: "right", width: 350, border: "5px red solid"}}>
            <InputGroup>
            <Input placeholder="Nome aplicação" />
            <InputGroupAddon addonType="append" size="sm" >
              <Button color="secondary">Buscar</Button>
            </InputGroupAddon>
    </InputGroup> */}
        </tr>
      </thead>
      <tbody style={{fontSize: 18 }}>
        <tr>
          <td>Nome Aplicação 1</td>
          
        </tr>
        <tr>
          <td>Nome Aplicação 2</td>
        </tr>
        <tr>
          <td>Nome Aplicação 3</td>
        </tr>
        <tr>
          <td>Nome Aplicação 1</td>
        </tr>
        <tr>
          <td>Nome Aplicação 2</td>
        </tr>
        <tr>
          <td>Nome Aplicação 3</td>
        </tr>
        <tr>
          <td>Nome Aplicação 1</td>
        </tr>
        <tr>
          <td>Nome Aplicação 2</td>
        </tr>
        <tr>
          <td>Nome Aplicação 3</td>
        </tr>
      </tbody>
    </Table>
    </div> 
       
      </>
    );
  }
}

export default Dashboard;

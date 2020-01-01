/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { connect } from 'react-redux'

import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl, Table
} from "react-bootstrap";

import { thPrjArray, tdPrjArray } from "variables/Variables.jsx";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";

class UserProfile extends Component {
  state = {
    projects: [
      {
        id: 1,
        name: 'Desenvolvimento de um PC quantico',
        type: 'TCC'
      },
      {
        id: 2,
        name: 'Ida a Marte com Elon Musk',
        type: 'Pesquisa',
      },
      {
        id: 3,
        name: 'Açoitar Bolsistas',
        type: 'Extensão',
      }
    ]

  };



  render() {

    const interests = [...this.props.usr.interest].join(', ');

    const projetos = [...this.state.projects].map(projeto => (
      <tr key={projeto.id}>
        <td>{projeto.id}</td>
        <td>{projeto.name}</td>
        <td>{projeto.type}</td>
      </tr>
    ));

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Editar Perfil"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-3", "col-md-3", "col-md-3", "col-md-3"]}
                      properties={[
                        {
                          label: "Tipo",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Tipo",
                          defaultValue: this.props.usr.type,
                          disabled: true
                        },
                        {
                          label: "Username",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Username",
                          defaultValue: this.props.usr.username,

                        },
                        {
                          label: "Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email",
                          defaultValue: this.props.usr.email
                        },
                        {
                          label: "Senha",
                          type: "password",
                          bsClass: "form-control",
                          placeholder: "Senha",
                          defaultValue: 'nicetry',
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "Nome Completo",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Nome",
                          defaultValue: this.props.usr.username
                        },
                        {
                          label: "Matrícula",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Matrícula",
                          defaultValue: this.props.usr.enrollmentNumber
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "Endereço",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Endereço",
                          defaultValue: this.props.usr.address.street,
                        },
                        {
                          label: "Cidade",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Cidade",
                          defaultValue: this.props.usr.address.city
                        },
                        {
                          label: "Telefone (What's App)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Telefone",
                          defaultValue: this.props.usr.phone
                        },

                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "Banco",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Banco",
                          defaultValue: this.props.usr.bankInfo.bank
                        },
                        {
                          label: "Agência",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Agência",
                          defaultValue: this.props.usr.bankInfo.agency,
                        },
                        {
                          label: "Conta",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Conta",
                          defaultValue: this.props.usr.bankInfo.account
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Tópicos de Interesse</ControlLabel>
                          <FormControl
                            rows="3"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Tópicos de Interesse"
                            defaultValue={interests}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill>
                      Update Profile
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name={this.props.usr.name}
                userName={this.props.usr.username}
                description={
                  <span>
                    {this.props.usr.type}
                    <br />
                    {this.props.usr.email}
                    <br />
                    {this.props.usr.phone}
                    <br />
                    {this.props.usr.enrollmentNumber}
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                title="Projetos"
                category="Lista de Projetos em Execução"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nome</th>
                      <th>Tipo</th>
                    </tr>
                    </thead>
                    <tbody>
                    {projetos}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    usr: state.user,
  }
}

export default connect(mapStateToProps)(UserProfile);

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
 /*this state is used as an auxiliary so the user has the opportunity to cancel any actions without hitting the actual state*/
  state = {
    userAux: {
      ...this.props.usr,
      address: {
        ...this.props.usr.address,
      },
      bankInfo: {
        ...this.props.usr.bankInfo,
      },
    },
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

  /* Function to handle the form changes */
  onUpdateHandler = (event, identifier) => {
    const updatedUser = {
      ...this.state.userAux,
      address: {
        ...this.state.userAux.address,
      },
      bankInfo: {
        ...this.state.userAux.bankInfo,
      },
    };
    let updatedFormElement = null;

    // Verify the identifier so it can adjust to nested objects (address and bank info)
    if (identifier === 'street' || identifier === 'city') {
      updatedFormElement = {
        ...updatedUser.address[identifier]
      };
      updatedFormElement.value = event.target.value;
      updatedUser.address[identifier] = updatedFormElement.value;
    }
    if (identifier === 'bank' || identifier === 'agency' || identifier === 'account') {
      updatedFormElement = {
        ...updatedUser.bankInfo[identifier]
      };
      updatedFormElement.value = event.target.value;
      updatedUser.bankInfo[identifier] = updatedFormElement.value;
    }
    else {
      updatedFormElement = {
        ...updatedUser[identifier]
      };
      updatedFormElement.value = event.target.value;
      updatedUser[identifier] = updatedFormElement.value;
    }

    this.setState({userAux: updatedUser});
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
                          onChange: (event) => this.onUpdateHandler(event, 'username')

                        },
                        {
                          label: "Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email",
                          defaultValue: this.props.usr.email,
                          onChange: (event) => this.onUpdateHandler(event, 'email')
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
                          defaultValue: this.props.usr.name,
                          onChange: (event) => this.onUpdateHandler(event, 'name')
                        },
                        {
                          label: "Matrícula",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Matrícula",
                          defaultValue: this.props.usr.enrollmentNumber,
                          onChange: (event) => this.onUpdateHandler(event, 'enrollmentNumber')
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
                          onChange: (event) => this.onUpdateHandler(event, 'street')
                        },
                        {
                          label: "Cidade",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Cidade",
                          defaultValue: this.props.usr.address.city,
                          onChange: (event) => this.onUpdateHandler(event, 'city')
                        },
                        {
                          label: "Telefone (What's App)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Telefone",
                          defaultValue: this.props.usr.phone,
                          onChange: (event) => this.onUpdateHandler(event, 'phone')
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
                          defaultValue: this.props.usr.bankInfo.bank,
                          onChange: (event) => this.onUpdateHandler(event, 'bank')

                        },
                        {
                          label: "Agência",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Agência",
                          defaultValue: this.props.usr.bankInfo.agency,
                          onChange: (event) => this.onUpdateHandler(event, 'agency')

                        },
                        {
                          label: "Conta",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Conta",
                          defaultValue: this.props.usr.bankInfo.account,
                          onChange: (event) => this.onUpdateHandler(event, 'account')
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
                    <Button onClick={(newState) => this.props.onClickUpdate(this.state.userAux)} bsStyle="info" pullRight fill>
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

/* Redux Functions */
const mapStateToProps = state => {
  return {
    usr: state.user,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClickUpdate: (newState) => dispatch({type: 'UPDATE', userPayload: newState})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

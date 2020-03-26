import React, { Component } from "react";
import axios from 'axios'


import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl, Table
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";


class NovoUsuario extends Component {

  state = {
    nome: '',
    matricula: '',
    email: '',
    tipo: '',
    username: '',
    password: '',
    endereco: '',
    cidade: '',
    telefone: '',
    banco: '',
    agencia: '',
    conta: '',
    interesses: '',
    projetos: ['Projeto 1', 'Projeto 2', 'Projeto 3'],
    nivel_acesso: '',
  };

  /* Function to handle the form changes */
  onUpdateHandler = (event, campo) => {
    const updatedState = {
      ...this.state
    };

    updatedState[campo] = event.target.value;
    this.setState(updatedState)

  };


  sendForm = () => {
    axios.post('https://website-c065f.firebaseio.com/usuarios.json', this.state)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  };

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Novo Usuário"
                content={
                  <form>
                    <Col md={2} style={{paddingLeft: 0, margin: 0}}>
                      <FormGroup controlId="selectType">
                        <ControlLabel>Tipo de Conta</ControlLabel>
                        <FormControl

                          componentClass="select"
                          bsClass="form-control"
                          onChange={(event) => this.onUpdateHandler(event, 'tipo')}
                        >
                          <option>Selecione</option>
                          <option value='Estudante - Graduação'>Estudante - Graduação</option>
                          <option value='Estudante - Mestrado'>Estudante - Mestrado</option>
                          <option value='Estudante - Outro'>Estudante - Outro</option>
                          <option value='Professor'>Professor</option>
                          <option value='Convidado'>Convidado</option>
                        </FormControl>
                      </FormGroup>
                    </Col>
                    <Col md={1} style={{paddingRight: 0}}>
                      <FormGroup controlId="selectAccess">
                        <ControlLabel>Nível de Acesso</ControlLabel>
                        <FormControl
                          componentClass="select"
                          bsClass="form-control"
                          onChange={(event) => this.onUpdateHandler(event, 'nivel_acesso')}
                        >
                          <option>Selecione</option>
                          <option value='0'>Nenhum</option>
                          <option value='1'>Criar Notícias</option>
                          <option value='2'>Criar Notícias e Usuários</option>
                          <option value='3'>Administrador</option>
                        </FormControl>
                      </FormGroup>
                    </Col>

                    <FormInputs
                      ncols={["col-md-3", "col-md-3", "col-md-2"]}
                      properties={[
                        {
                          label: "Username",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Username",
                          defaultValue: '' ,
                          onChange: (event) => this.onUpdateHandler(event, 'username')

                        },
                        {
                          label: "Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email",
                          defaultValue: '' ,
                          onChange: (event) => this.onUpdateHandler(event, 'email')
                        },
                        {
                          label: "Senha",
                          type: "password",
                          bsClass: "form-control",
                          placeholder: "Senha",
                          onChange: (event) => this.onUpdateHandler(event, 'password')
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
                          defaultValue: '' ,
                          onChange: (event) => this.onUpdateHandler(event, 'nome')
                        },
                        {
                          label: "Matrícula",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Matrícula",
                          defaultValue: '' ,
                          onChange: (event) => this.onUpdateHandler(event, 'matricula')
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
                          defaultValue: '' ,
                          onChange: (event) => this.onUpdateHandler(event, 'endereco')
                        },
                        {
                          label: "Cidade",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Cidade",
                          defaultValue: '' ,
                          onChange: (event) => this.onUpdateHandler(event, 'cidade')
                        },
                        {
                          label: "Telefone (What's App)",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Telefone",
                          defaultValue: '' ,
                          onChange: (event) => this.onUpdateHandler(event, 'telefone')
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
                          defaultValue: '' ,
                          onChange: (event) => this.onUpdateHandler(event, 'banco')

                        },
                        {
                          label: "Agência",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Agência",
                          defaultValue: '' ,
                          onChange: (event) => this.onUpdateHandler(event, 'agencia')

                        },
                        {
                          label: "Conta",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Conta",
                          defaultValue: '' ,
                          onChange: (event) => this.onUpdateHandler(event, 'conta')
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
                            defaultValue=''
                            onChange={(event) => this.onUpdateHandler(event, 'interesses')}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button onClick={this.sendForm} bsStyle="info" pullRight fill>
                      Criar Usuário
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>

            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default NovoUsuario;

import React, {Component} from "react";
import axios from 'axios'


import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import {Formik} from 'formik';
import * as Yup from 'yup'

import {Card} from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import Error from "../../components/FormInputs/Error";

class UsuarioForm extends Component {


  initialValues = this.props.valoresIniciais

  validationSchema = Yup.object().shape({
    nome: Yup.string()
      .min(3, 'Nome deve possuir no mínimo 3 caracteres!')
      .max(99, 'Nome é muito grande!')
      .required('Campo Obrigatório!'),
    matricula: Yup.string()
      .required('Campo Obrigatório!'),
    email: Yup.string()
      .email('E-Mail Inválido!')
      .max(99, 'E-Mail muito grande!')
      .required('Campo Obrigatório!'),
    tipo: Yup.string()
      .required('Campo Obrigatório!'),
    username: Yup.string()
      .min(3, 'Nome deve possuir no mínimo 3 caracteres!')
      .max(30, 'Máximo 30 caracteres!')
      .required('Campo Obrigatório!'),
    password: Yup.string()
      .min(8, 'Mínimo 8 caracteres!')
      .max(16, 'Máximo 16 caracteres!')
      .required('Campo Obrigatório!'),
    endereco: Yup.string()
      .max(200, 'Máximo 200 caracteres!'),
    cidade: '',
    telefone: '',
    banco: '',
    agencia: '',
    conta: '',
    interesses: '',
    nivel_acesso: Yup.number()
      .required('Campo Obrigatório!'),
  });

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title={this.props.titulo}
                content={
                  <Formik initialValues={this.initialValues}
                          validationSchema={this.validationSchema}
                          onSubmit={(values, {setSubmitting}) => {
                            setSubmitting(true);

                            if (!this.props.editar) {
                              axios.post('https://website-c065f.firebaseio.com/usuarios.json', values)
                                .then(res => {
                                  console.log(res)
                                  setSubmitting(false);
                                  window.location.reload()
                                })
                                .catch(err => {
                                  setSubmitting(false);
                                  alert('Erro ao comunicar-se com o servidor. Tente novamente mais tarde.')
                                  window.location.reload()
                                })
                            }
                          }}
                  >
                    {({
                        values, errors, touched, handleChange,
                        handleBlur, handleSubmit, isSubmitting
                      }) => (
                      <form onSubmit={handleSubmit}>
                        <Col md={2}>
                          <FormGroup controlId="tipo"
                                     validationState={touched.tipo && errors.tipo ? 'error' : null}>
                            <ControlLabel>Tipo de Conta</ControlLabel>
                            <FormControl
                              componentClass="select"
                              bsClass="form-control"
                              name='tipo'
                              onChange={handleChange}
                              onBlur={handleBlur}
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
                        <Col md={2}>
                          <FormGroup controlId="nivel_acesso"
                                     validationState={touched.nivel_acesso && errors.nivel_acesso ? 'error' : null}>
                            <ControlLabel>Nível de Acesso</ControlLabel>
                            <FormControl
                              name='nivel_acesso'
                              componentClass="select"
                              bsClass="form-control"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              <option>Selecione</option>
                              <option value='0'>Nenhum</option>
                              <option value='1'>Criar Notícias</option>
                              <option value='2'>Criar Notícias e Usuários</option>
                              <option value='3'>Administrador</option>
                            </FormControl>
                          </FormGroup>
                        </Col>
                        <Col md={3}>
                          <FormGroup controlId="username"
                                     validationState={touched.username && errors.username ? 'error' : null}
                          >
                            <ControlLabel>Usuário</ControlLabel>
                            <FormControl type='text'
                                         name='username'
                                         bsClass='form-control'
                                         placeholder='Usuário'
                                         value={values.username}
                                         onBlur={handleBlur}
                                         onChange={handleChange}
                            />
                            <Error touched={touched.username} message={errors.username}/>
                          </FormGroup>
                        </Col>
                        <Col md={3}>
                          <FormGroup controlId="email"
                                     validationState={touched.email && errors.email ? 'error' : null}
                          >
                            <ControlLabel>E-Mail</ControlLabel>
                            <FormControl type='email'
                                         name='email'
                                         className='form-control has-error'
                                         placeholder='E-Mail'
                                         value={values.email}
                                         onBlur={handleBlur}
                                         onChange={handleChange}
                            />
                            <Error touched={touched.email} message={errors.email}/>
                          </FormGroup>
                        </Col>
                        <Col md={2}>
                          <FormGroup controlId="password"
                                     validationState={touched.email && errors.email ? 'error' : null}
                          >
                            <ControlLabel>Senha</ControlLabel>
                            <FormControl type='password'
                                         name='password'
                                         className='form-control has-error'
                                         placeholder='Senha'
                                         value={values.password}
                                         onBlur={handleBlur}
                                         onChange={handleChange}
                            />
                            <Error touched={touched.password} message={errors.password}/>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup controlId="nome"
                                     validationState={touched.nome && errors.nome ? 'error' : null}
                          >
                            <ControlLabel>Nome Completo</ControlLabel>
                            <FormControl type='text'
                                         name='nome'
                                         bsClass='form-control'
                                         placeholder='Nome Completo'
                                         value={values.nome}
                                         onBlur={handleBlur}
                                         onChange={handleChange}
                            />
                            <Error touched={touched.nome} message={errors.nome}/>
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup controlId="matricula"
                                     validationState={touched.matricula && errors.matricula ? 'error' : null}
                          >
                            <ControlLabel>Número de Matrícula</ControlLabel>
                            <FormControl type='text'
                                         name='matricula'
                                         bsClass='form-control'
                                         placeholder='Matrícula'
                                         value={values.matricula}
                                         onBlur={handleBlur}
                                         onChange={handleChange}
                            />
                            <Error touched={touched.matricula} message={errors.matricula}/>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup controlId="endereco"
                                     validationState={touched.endereco && errors.endereco ? 'error' : null}
                          >
                            <ControlLabel>Endereço</ControlLabel>
                            <FormControl type='text'
                                         name='endereco'
                                         bsClass='form-control'
                                         placeholder='Endereço'
                                         value={values.endereco}
                                         onBlur={handleBlur}
                                         onChange={handleChange}
                            />
                            <Error touched={touched.endereco} message={errors.endereco}/>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup controlId="cidade"
                                     validationState={touched.cidade && errors.cidade ? 'error' : null}
                          >
                            <ControlLabel>Cidade</ControlLabel>
                            <FormControl type='text'
                                         name='cidade'
                                         bsClass='form-control'
                                         placeholder='Cidade'
                                         value={values.cidade}
                                         onBlur={handleBlur}
                                         onChange={handleChange}
                            />
                            <Error touched={touched.cidade} message={errors.cidade}/>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup controlId="telefone"
                                     validationState={touched.telefone && errors.telefone ? 'error' : null}
                          >
                            <ControlLabel>Telefone</ControlLabel>
                            <FormControl type='text'
                                         name='telefone'
                                         bsClass='form-control'
                                         placeholder='Telefone'
                                         value={values.telefone}
                                         onBlur={handleBlur}
                                         onChange={handleChange}
                            />
                            <Error touched={touched.telefone} message={errors.telefone}/>
                          </FormGroup>
                        </Col>

                        <Col md={4}>
                          <FormGroup controlId="banco"
                                     validationState={touched.banco && errors.banco ? 'error' : null}
                          >
                            <ControlLabel>Banco</ControlLabel>
                            <FormControl type='text'
                                         name='banco'
                                         bsClass='form-control'
                                         placeholder='Banco'
                                         value={values.banco}
                                         onBlur={handleBlur}
                                         onChange={handleChange}
                            />
                            <Error touched={touched.banco} message={errors.banco}/>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup controlId="agencia"
                                     validationState={touched.agencia && errors.agencia ? 'error' : null}
                          >
                            <ControlLabel>Agencia</ControlLabel>
                            <FormControl type='text'
                                         name='agencia'
                                         bsClass='form-control'
                                         placeholder='Agencia'
                                         value={values.agencia}
                                         onBlur={handleBlur}
                                         onChange={handleChange}
                            />
                            <Error touched={touched.agencia} message={errors.agencia}/>
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup controlId="conta"
                                     validationState={touched.conta && errors.conta ? 'error' : null}
                          >
                            <ControlLabel>Conta</ControlLabel>
                            <FormControl type='text'
                                         name='conta'
                                         bsClass='form-control'
                                         placeholder='Conta'
                                         value={values.conta}
                                         onBlur={handleBlur}
                                         onChange={handleChange}
                            />
                            <Error touched={touched.conta} message={errors.conta}/>
                          </FormGroup>
                        </Col>

                        <Row>
                          <Col md={12}>
                            <FormGroup controlId="interesses"
                                       validationState={touched.interesses && errors.interesses ? 'error' : null}
                            >
                              <ControlLabel>Tópicos de Interesse</ControlLabel>
                              <FormControl componentClass='textArea'
                                           name='interesses'
                                           bsClass='form-control'
                                           placeholder='Digite seus Tópicos de Interesse'
                                           value={values.interesses}
                                           onBlur={handleBlur}
                                           onChange={handleChange}
                              />
                              <Error touched={touched.interesses} message={errors.interesses}/>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button type='submit' bsStyle="info" pullRight fill disabled={isSubmitting}>
                          Criar Usuário
                        </Button>
                        <div className="clearfix"/>
                      </form>
                    )}
                  </Formik>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UsuarioForm;

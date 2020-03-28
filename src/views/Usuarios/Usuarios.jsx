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
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray } from "variables/Variables.jsx";
import Button from '../../components/CustomButton/CustomButton'

import { connect } from 'react-redux'
import * as actions from '../../redux/actions/index'

class Usuarios extends Component {

  componentDidMount() {
   this.props.fetchUsuarios();
   console.log(this.props.usuarios)
  }


  deleteObjectHandler = (id) => {
    /*let updatedUsuarios = this.state.usuarios;
    updatedUsuarios = updatedUsuarios.filter(el => el.id !== id);
    this.setState({usuarios: updatedUsuarios});
    console.log(this.state.usuarios)*/
  };

  render() {
    const usuariosAtivos = this.props.usuarios.map(usuario => (
       <tr key={usuario.id} >
         <td>{usuario.id}</td>
         <td>{usuario.nome}</td>
         <td>{usuario.tipo}</td>
         <td>{usuario.matricula}</td>
         <td><Button size='sm' onClick={()=>{console.log('clicou')}}
         >Editar</Button>
         </td>
         <td>
           <Button fill size='sm' onClick={(id) => this.deleteObjectHandler(usuario.id)}>Excluir</Button>
         </td>
       </tr>
         ));

    const usuariosInativos = this.props.usuarios.map(usuario => (
      <tr key={usuario.id} >
        <td>{usuario.id}</td>
        <td>{usuario.nome}</td>
        <td>{usuario.tipo}</td>
        <td>{usuario.matricula}</td>
        <td><Button size='sm' onClick={()=>{console.log('clicou')}}
        >Adicionar</Button>
        </td>
        <td>
          <Button fill size='sm'>Excluir</Button>
        </td>
      </tr>
    ));

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Usuários Ativos"
                category="Lista todos os usuários ativos"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {usuariosAtivos}
                    </tbody>
                  </Table>
                }
              />
            </Col>

            <Col md={12}>
              <Card
                plain
                title="Usuários Inativos"
                category="Lista de usuários aguardando permissão para se tornar ativo"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {usuariosInativos}
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
    usuarios: state.usuarios.usuarios
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsuarios: () => dispatch(actions.fetchUsuarios())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios);

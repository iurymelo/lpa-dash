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

import axios from 'axios';

class Usuarios extends Component {
  state = {
    usuarios: [
    ]
  };

  componentDidMount() {
    axios.get('https://website-c065f.firebaseio.com/usuarios.json')
      .then(res => {
        const obj = Object.values(res.data);
        obj.map(value => {
          const novoEstado = {
            ...this.state
          };
          novoEstado.usuarios.push({id: value.matricula, name: value.nome, type: value.tipo, numProj: 0})
          this.setState(novoEstado)
        });
      })
      .catch(err => {
        console.log(err)
      })
  }


  deleteObjectHandler = (id) => {
    let updatedUsuarios = this.state.usuarios;
    updatedUsuarios = updatedUsuarios.filter(el => el.id !== id);
    this.setState({usuarios: updatedUsuarios});
    console.log(this.state.usuarios)
  };

  render() {

    const usuariosAtivos = this.state.usuarios.map(usuario => (
       <tr key={usuario.id} >
         <td>{usuario.id}</td>
         <td>{usuario.name}</td>
         <td>{usuario.type}</td>
         <td>{usuario.numProj}</td>
         <td><Button size='sm' onClick={()=>{console.log('clicou')}}
         >Editar</Button>
         </td>
         <td>
           <Button fill size='sm' onClick={(id) => this.deleteObjectHandler(usuario.id)}>Excluir</Button>
         </td>
       </tr>
         ));

    const usuariosInativos = this.state.usuarios.map(usuario => (
      <tr key={usuario.id} >
        <td>{usuario.id}</td>
        <td>{usuario.name}</td>
        <td>{usuario.type}</td>
        <td>{usuario.numProj}</td>
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

export default Usuarios;

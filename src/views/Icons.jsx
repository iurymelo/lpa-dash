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
import { Grid, Row, Col } from "react-bootstrap";
import Button from '../components/CustomButton/CustomButton'
import Card from '../components/Card/Card'

class Icons extends Component {

  render() {

    const projetos = {
      projeto: [
        {
          id: 1,
          author: 'Iury Melo',
          date: '02/12/2019',
          title: 'Desenvolvimento de um reator nuclear',
          category: 'TCC',
          body: 'Projeto para desenvolver um reator nuclear para smartphones'
        },
        {
          id: 2,
          author: 'Iury Melo',
          date: '02/12/2019',
          title: 'Desenvolvimento de um reator nuclear',
          category: 'TCC',
          body: 'Projeto para desenvolver um reator nuclear para smartphones'
        },
        {
          id: 3,
          author: 'Iury Melo',
          date: '02/12/2019',
          title: 'Desenvolvimento de um reator nuclear',
          category: 'TCC',
          body: 'Projeto para desenvolver um reator nuclear para smartphones'
        },
        {
          id: 4,
          author: 'Iury Melo',
          date: '02/12/2019',
          title: 'Desenvolvimento de um reator nuclear',
          category: 'TCC',
          body: 'Projeto para desenvolver um reator nuclear para smartphones'
        },
      ]
    };

    const projects = [...projetos.projeto].map(projeto => (
      <Col key={projeto.id} md={4}>
        <Card
          news
          title={projeto.title}
          category={projeto.category}
          content={
            projeto.body
          }
        />
      </Col>
    ))

    return (
      <div className="content">
        <Grid fluid>
          <div style={{paddingBottom:'20px'}}>
            <Button bsStyle="primary"
                    bsSize="lg"
                    fill
            >
              Novo Projeto
            </Button>
          </div>
          <Row>
            {projects}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Icons;

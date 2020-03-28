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
import React, {Component} from "react";
import {Grid, Row, Col} from "react-bootstrap";
import { connect } from 'react-redux'

import Card from "components/Card/Card.jsx";
import Button from '../../components/CustomButton/CustomButton'
import classes from "../../components/Card/Card.module.css";


class Noticias extends Component {


  clickHandler = () => {
    this.props.history.push('novanoticia')
  };

  render() {
    const news = [...this.props.noticias].map(noticias => (
      <Col key={noticias.id} md={4}>
        <div className={classes.ButtonContainer}>
          <div className={classes.ButtonSpace}>
            <Button bsStyle="info" pullRight fill type="submit">
              Editar
            </Button>
          </div>
          <div className={classes.ButtonSpace}>
            <Button onClick={(id) => this.props.removeNoticia(noticias.id)} bsStyle="danger" pullRight fill type="submit">
              Excluir
            </Button>
          </div>
        </div>
        <Card
          title={noticias.title}
          category={noticias.category}
          content={
            noticias.body
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
                    onClick={this.clickHandler}
            >
              Nova Notícia
            </Button>
          </div>
          <Row>
            {news}
          </Row>
        </Grid>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    noticias: state.noticias
  }
};

const mapDispatchToProps = dispatch => {
  return {
    removeNoticia: (id) => dispatch({type: 'REMOVE_NOTICIA', identifier: id})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Noticias);

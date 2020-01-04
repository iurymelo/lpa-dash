import React, {Component} from 'react'
import {Col, ControlLabel, FormControl, FormGroup, Grid, Row, Table} from "react-bootstrap";
import { connect } from 'react-redux'

import FormInputs from "../../components/FormInputs/FormInputs";
import  Button from '../../components/CustomButton/CustomButton'
import Card from '../../components/Card/Card'

class NovaNoticia extends Component {

  /*this state is used as an auxiliary so the user has the opportunity to cancel any actions without hitting the actual state*/
  state = {
    novaNoticia: {
      id: 6,
      author: 'Iury Melo',
      date: '02/12/2019',
      title: '',
      category: 'Notícias',
      body: ''
    }
  };

  /* Function to handle the form changes */
  novaNoticiaUpdateHandler = (event, identifier) => {
    const updatedNoticia = {
      ...this.state.novaNoticia
    };
    const updatedNoticiaElement = {
      ...updatedNoticia[identifier]
    };

    updatedNoticiaElement.value = event.target.value;
    updatedNoticia[identifier] = updatedNoticiaElement.value;

    this.setState({novaNoticia: updatedNoticia});
  };

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Nova Notícia"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-4", "col-md-8"]}
                      properties={[
                        {
                          label: "Autor",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Tipo",
                          defaultValue: 'Iury Melo',
                          disabled: true
                        },
                        {
                          label: "Título",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Titulo",
                          defaultValue: 'Título',
                          onChange: (event) => this.novaNoticiaUpdateHandler(event, 'title')

                        },
                      ]}
                    />
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Texto da Notícia</ControlLabel>
                          <FormControl
                            rows="9"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Corpo da Notícia"
                            defaultValue='Nova Notícia - Esse editor de texto será substituido por um Rich Text Editor com suporte para imagens.'
                            onChange={(event) => this.novaNoticiaUpdateHandler(event, 'body')}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Button onClick={(newState) => this.props.onClickNovaNoticia(this.state.novaNoticia)} bsStyle="info" pullRight fill>
                      Criar Notícia
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>

          </Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    news: state.noticias,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClickNovaNoticia: (newState) => dispatch({type: 'NOVA_NOTICIA', noticiaPayload: newState})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NovaNoticia);
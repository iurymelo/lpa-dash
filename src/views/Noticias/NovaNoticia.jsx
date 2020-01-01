import React, {Component} from 'react'
import {Col, ControlLabel, FormControl, FormGroup, Grid, Row, Table} from "react-bootstrap";

import FormInputs from "../../components/FormInputs/FormInputs";
import  Button from '../../components/CustomButton/CustomButton'
import Card from '../../components/Card/Card'

class NovaNoticia extends Component {
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
                          placeholder: "Username",
                          defaultValue: 'Título',

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
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Button bsStyle="info" pullRight fill>
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

export default NovaNoticia;
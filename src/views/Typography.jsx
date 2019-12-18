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

import Card from "components/Card/Card.jsx";

class Typography extends Component {
  news = {
    noticias: [
      {
      id: 1,
      author: 'Iury Melo',
      date: '02/12/2019',
      title: 'Kraken Invade Morro dos Conventos',
      category: 'Realidade',
      body: 'Um kraken invadiu a praia do morro dos conventos nessa tarde.'
      },
      {
        id: 2,
        author: 'Iury Melo',
        date: '02/12/2019',
        title: 'Kraken Invade Morro dos Conventos',
        category: 'Realidade',
        body: 'Um kraken invadiu a praia do morro dos conventos nessa tarde.'
      },
      {
        id: 3,
        author: 'Iury Melo',
        date: '02/12/2019',
        title: 'Kraken Invade Morro dos Conventos',
        category: 'Realidade',
        body: 'Um kraken invadiu a praia do morro dos conventos nessa tarde.'
      },
      {
        id: 4,
        author: 'Iury Melo',
        date: '02/12/2019',
        title: 'Kraken Invade Morro dos Conventos',
        category: 'Realidade',
        body: 'Um kraken invadiu a praia do morro dos conventos nessa tarde.'
      },
      {
        id: 5,
        author: 'Iury Melo',
        date: '02/12/2019',
        title: 'Kraken Invade Morro dos Conventos',
        category: 'Realidade',
        body: 'Um kraken invadiu a praia do morro dos conventos nessa tarde.'
      },

    ]
  }
  render() {
    const news = [...this.news.noticias].map(noticias => (
      <Col key={noticias.id} md={4}>
        <Card
          title={noticias.title}
          category={noticias.category}
          content={
            noticias.body
          }

        />
      </Col>
    ) )
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            {news}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Typography;

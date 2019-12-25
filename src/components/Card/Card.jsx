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

import Button from "../CustomButton/CustomButton.jsx";

import classes from './Card.module.css'

export class Card extends Component {
  render() {
    let botao = null;
    if(this.props.news)
    {
      botao = (
        <div className={classes.ButtonContainer}>
          <div className={classes.ButtonSpace}>
            <Button bsStyle="info" pullRight fill type="submit">
              Editar
            </Button>
          </div>
          <div className={classes.ButtonSpace}>
            <Button bsStyle="danger" pullRight fill type="submit">
              Excluir
            </Button>
          </div>
        </div>
      )
    }
    return (
      <div className={"card" + (this.props.plain ? " card-plain" : "")}>
        <div className={"header" + (this.props.hCenter ? " text-center" : "")}>
          <h4 className="title">{this.props.title}</h4>
          <p className="category">{this.props.category}</p>
        </div>
        <div
          className={
            "content" +
            (this.props.ctAllIcons ? " all-icons" : "") +
            (this.props.ctTableFullWidth ? " table-full-width" : "") +
            (this.props.ctTableResponsive ? " table-responsive" : "") +
            (this.props.ctTableUpgrade ? " table-upgrade" : "")
          }
        >
          {this.props.content}

          <div className="footer">
            {this.props.legend}
            {this.props.stats != null ? <hr /> : ""}
            <div className="stats">
              <i className={this.props.statsIcon} /> {this.props.stats}
            </div>
          </div>
          {botao}
        </div>
      </div>
    );
  }
}

export default Card;

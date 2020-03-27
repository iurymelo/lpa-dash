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
import { Nav, NavDropdown, MenuItem } from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {
    return (
      <div>
        <Nav pullRight>
          <NavDropdown
            eventKey={2}
            title="Menu"
            id="basic-nav-dropdown-right"
          >
            <MenuItem eventKey={2.1} href={'/admin/novanoticia'}>Nova Notícia</MenuItem>
            <MenuItem eventKey={2.2} href={'/admin/novousuario'}>Novo Usuário</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.3} href={'/admin/perfil'}>Meu Perfil</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.5}>LogOut</MenuItem>
          </NavDropdown>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;

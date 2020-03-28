import React, {Component} from "react";
import axios from 'axios';

import UsuarioForm from "./UsuarioForm";

class EditarUsuario extends Component {

  initialValues = {
    nome: '',
    matricula: '',
    email: '',
    tipo: '',
    username: '',
    password: '',
    endereco: '',
    cidade: '',
    telefone: '',
    banco: '',
    agencia: '',
    conta: '',
    interesses: '',
    projetos: ['Projeto 1', 'Projeto 2', 'Projeto 3'],
    nivel_acesso: '',
  };



  render() {
    return (
      <div className="content">
        <UsuarioForm titulo={'Editar Usuário'}
                     valoresIniciais={this.initialValues}
                     editar
        />
      </div>
    );
  }
}

export default EditarUsuario;

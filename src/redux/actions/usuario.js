import * as actionTypes from './actionTypes'
import axios from 'axios'

export const fetchUsuariosFail = () => {
  return {
    type: actionTypes.FETCH_USUARIOS_FAIL
  }
};

export const fetchUsuariosSuccess = (listaUsuarios) => {
  return {
    usuarios: listaUsuarios,
    type: actionTypes.FETCH_USUARIOS_SUCCESS
  }
};

export const fetchUsuariosStart = () => {
  return {
    usuarios: [],
    type: actionTypes.FETCH_USUARIOS_START
  }
};

export const fetchUsuarios = () => {
  return dispatch => {
    dispatch(fetchUsuariosStart());
    axios.get('https://website-c065f.firebaseio.com/usuarios.json')
      .then(res => {
        const fetchedUsuarios = [] ;
        for (let key in res.data) {
          fetchedUsuarios.push({
            ...res.data[key],
            id: key,
          })
        }
        dispatch(fetchUsuariosSuccess(fetchedUsuarios))
      })
      .catch(err => {
        dispatch(fetchUsuariosFail())
      })
  }
};

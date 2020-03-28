const initialState = {
  usuarios: [],
};



const usuariosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USUARIOS_START':
      return {
        usuarios: []
      };

    case 'FETCH_USUARIOS_SUCCESS':
      console.log('FETCH SUCCESS')
      console.log(action.usuarios)
      return {
        ...state,
        usuarios: state.usuarios.concat(action.usuarios)
      };

    case 'FETCH_USUARIOS_FAIL':
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default usuariosReducer;
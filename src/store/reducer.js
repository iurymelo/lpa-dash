const initialState ={
  user: {
    id: 1,
    name:'Roderval Marcelino',
    address: {
      street: 'Rua 1, Cidade Alta',
      city: 'Araranguá',
    },
    username: 'roderval.marcelino',
    type: 'Professor',
    cpf: '',
    email:'roderval@yahoo.com',
    enrollmentNumber: '2025420',
    password: 'password',
    phone: '(48) 99999-9999',
    bankInfo: {
      bank: 'BB',
      agency: '01',
      account: '010101-01',
    },
    interest: ['IA', 'Software Embarcado', 'Sensoriamento'],
  }
}

const reducer = (state = initialState, action) => {
  if (action.type === 'UPDATE') {
    const newState = action.userPayload;
    state.user = newState;
    console.log(state.user.name)
    console.log(state.user.address.street)
  }
  return state;
};

export default reducer;
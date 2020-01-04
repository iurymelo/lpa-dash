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
  },
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      const newState = action.userPayload;
      return {
        ...state,
        user: newState
      };

    case 'NOVA_NOTICIA':
      const novaNoticia = action.noticiaPayload;
      const updatedNoticias = {
        ...state,
        noticias: [...state.noticias],
      };

      updatedNoticias.noticias.push(novaNoticia);
      return {
        ...state,
        noticias: updatedNoticias.noticias,
      }

    case 'REMOVE_NOTICIA':
      console.log(state.noticias);
      const updatedNews = [
        ...state.noticias
      ];

      return {
        ...state,
        noticias:  updatedNews.filter(el => el.id !== action.identifier),
      }

    default:
      return state;
  }
};

export default reducer;
const initialState ={
  user: {

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

const noticias = (state = initialState, action) => {
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
      };

    case 'REMOVE_NOTICIA':
      console.log(state.noticias);
      const updatedNews = [
        ...state.noticias
      ];

      return {
        ...state,
        noticias:  updatedNews.filter(el => el.id !== action.identifier),
      };

    default:
      return state;
  }
};

export default noticias;
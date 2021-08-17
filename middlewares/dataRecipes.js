import axios from 'axios';
import { GET_DATA, ChangeDataRecipes } from 'src/actions/recipes';
import { changePseudo, LOGIN, toggleConnected, saveToken, CHECK_TOKEN } from 'src/actions/user';
import api from './utils/api';

const dataRecipes = (store) => (next) => (action) => {
  switch (action.type) {
    case CHECK_TOKEN: {
      const token = localStorage.getItem('token');
      // s'il existe on fait notre requête API pour vérifier sa validité
      if (token) {
        console.log('connection Token');
        // api.get('/checkToken', {
        //   // on oublie pas d'embarquer le token avec la requête
        //   headers: {
        //     authorization: `Bearer ${token}`,
        //   },
        // })
        //   .then((response) => {
        //     // ici le token est bon, donc on peut le stocker dans l'insance
        //     api.defaults.headers.common.authorization = `Bearer ${token}`;

        //     // en cas de réponse on sauvegarde le user dans le state
        //     // avec la même action que pour le login
        //     // remarque: la réponse n'inclut pas le token, il faut donc
        //     // le placer nous-même dans le payload
        //     const payload = { ...response.data };
        //     const actionSaveUser = toggleConnected(payload);
        //     store.dispatch(actionSaveUser);
        //   })
        //   .catch((error) => console.log(error));else {}]
      }
    }
    case GET_DATA: {
      const getData = async () => {
        try {
          const response = await api.get('http://localhost:3001/recipes');
          store.dispatch(ChangeDataRecipes(response.data));
        }
        catch (error) {
          console.log('error', error);
        }
      };
      getData();
      break;
    }
    case LOGIN: {
      const getData = async () => {
        try {
          const state = store.getState();
          const response = await api.post('http://localhost:3001/login', {
            email: state.user.email,
            password: state.user.password,
          });
          console.log(response.data.token);
          localStorage.setItem('token', response.data.token);
          api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
          store.dispatch(changePseudo(response.data.pseudo));
          store.dispatch(toggleConnected());
          store.dispatch(saveToken(response.data.token));
        }
        catch (error) {
          console.log('error', error);
        }
      };
      getData();
      break;
    }
    default:
      next(action);
  }
};

export default dataRecipes;

import { combineReducers } from 'redux';
import user from './user';

// Dans mainReducer on renseigne la combinaison de tous nos reducers.
// Dans cet example y en a que un (user). Mais il pourrait y avoir (playlist), (song), etc... en fonction de nos besoin aves l'api spotify.

const mainReducer = combineReducers({
    user: user,
});

export default mainReducer;
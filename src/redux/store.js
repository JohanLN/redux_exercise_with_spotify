import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './reducers/index';

// Store est initialisé entant que createStore de redux.
// Dans ce store on renseigne nos reducers ici mainReducer, ainsi que des options.
// L'option que j'utilise est un middleware de reduc-thunk. Il permet de réaliser des vérifications et des actions asynchrones pour affecter les données de nos calls Api.

const store = createStore(
    mainReducer,
    applyMiddleware(thunk)
);

export default store;
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import HomePage from './HomePage';

// App.js est la foncation de notre App. Ici on définit sa structure avec Provider pour affecter redux à notre App toute entière.
// Si on souhaite ajouter des routes on pourrait le faire ici, idem pour le theme de notre app avec material-ui


// Dans Provider on donne en prop un store qui est la combinaison d'un ou plusieurs reducer. Voir store dans redux/store.js

const App = () => {
  return (
    <Provider store={store}>
      <HomePage/>
    </Provider>
  );
}

export default App;

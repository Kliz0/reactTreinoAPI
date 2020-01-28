import { combineReducers } from 'redux';
import aplicacao from './aplicacao/reducer';

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  aplicacao
});

export default reducers;

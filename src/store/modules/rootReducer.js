import { combineReducers } from "redux";
import aplicacao from "./aplicacoes/reducer";
import servico from './servico/reducer';

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  aplicacao,
  servico
});

export default reducers;

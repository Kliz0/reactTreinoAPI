import { combineReducers } from "redux";
import aplicacoes from "./aplicacoes/reducer";
import servicos from "./servicos/reducer";

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  aplicacoes,
  servicos
});

export default reducers;
